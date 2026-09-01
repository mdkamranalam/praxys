import { Response, Router } from "express";

import prisma from "../lib/prisma.js";
import {
  authenticateToken,
  AuthRequest,
} from "../middlewares/auth.middleware.js";

const router = Router();

router.use(authenticateToken);

// GET / -> Get all user tasks
router.get("/", async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const tasks = await prisma.task.findMany({
      where: { userId: req.userId },
      orderBy: { createdAt: "desc" },
    });

    res.status(200).json({ tasks });
  } catch (error) {
    console.error("Error fetching tasks:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// POST / -> Create task
router.post("/", async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { title, description } = req.body;

    if (!title || typeof title !== "string" || !title.trim()) {
      res.status(400).json({ message: "Title is required" });
      return;
    }

    const newTask = await prisma.task.create({
      data: {
        title: title.trim(),
        description: description ? description.trim() : null,
        userId: req.userId!,
      },
    });

    res
      .status(201)
      .json({ message: "Task created successfully", task: newTask });
  } catch (error) {
    console.error("Error creating tasks:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// PATCH /:id -> Update task
router.patch("/:id", async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const taskId = parseInt(req.params.id as string, 10);

    if (isNaN(taskId)) {
      res.status(400).json({ message: "Invalid task ID" });
      return;
    }

    const { title, description, isCompleted } = req.body;

    const existingTask = await prisma.task.findFirst({
      where: { id: taskId, userId: req.userId },
    });

    if (!existingTask) {
      res.status(404).json({ message: "Task not found or unauthorized" });
      return;
    }

    const updateTask = await prisma.task.update({
      where: { id: taskId },
      data: {
        ...(title !== undefined && { title: title.trim() }),
        ...(description !== undefined && {
          description: description ? description.trim() : null,
        }),
        ...(typeof isCompleted === "boolean" && { isCompleted }),
      },
    });

    res.status(200).json({ message: "Task updated", task: updateTask });
  } catch (error) {
    console.error("Error updating tasks:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// DELETE /:d -> Delete task
router.delete(
  "/:id",
  async (req: AuthRequest, res: Response): Promise<void> => {
    try {
      const taskId = parseInt(req.params.id as string, 10);

      if (isNaN(taskId)) {
        res.status(400).json({ message: "Invalid task ID" });
        return;
      }

      const existingTask = await prisma.task.findFirst({
        where: { id: taskId, userId: req.userId },
      });

      if (!existingTask) {
        res.status(404).json({ message: "Task not found or unauthorized" });
        return;
      }

      await prisma.task.delete({
        where: { id: taskId },
      });

      res.status(200).json({ message: "Task deleted successfully" });
    } catch (error) {
      console.error("Error deleting tasks:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
);

export default router;
