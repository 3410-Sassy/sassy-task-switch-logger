import React, { useState } from 'react';
import { YStack } from 'tamagui';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TaskHeader } from '../components/TaskHeader';
import { TaskGrid } from '../components/TaskGrid';
import { TaskDialog } from '../components/TaskDialog';
import { mockCategories, mockTasks } from '../utils/mockData';
import { Category, Task, TrackedTime } from '../types';

export const MainScreen: React.FC = () => {
  const [categories] = useState<Category[]>(mockCategories);
  const [tasks] = useState<Task[]>(mockTasks);
  const [currentTask, setCurrentTask] = useState<TrackedTime | null>(null);
  const [activeTaskId, setActiveTaskId] = useState<string | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogMode, setDialogMode] = useState<'task' | 'category'>('task');
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('');
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  const handleTaskPress = (task: Task) => {
    if (activeTaskId === task.id) {
      // 同じタスクをタップした場合は停止
      setCurrentTask(null);
      setActiveTaskId(null);
      // TODO: Google Calendarにイベントを登録
    } else {
      // 別のタスクをタップした場合は切り替え
      if (currentTask) {
        // TODO: 現在のタスクをGoogle Calendarに登録
      }
      setCurrentTask({
        taskId: task.id,
        startTime: new Date(),
      });
      setActiveTaskId(task.id);
    }
  };

  const handleTaskLongPress = (task: Task) => {
    setEditingTask(task);
    setDialogMode('task');
    setDialogOpen(true);
  };

  const handleAddTask = (categoryId: string) => {
    setSelectedCategoryId(categoryId);
    setEditingTask(null);
    setDialogMode('task');
    setDialogOpen(true);
  };

  const handleAddCategory = () => {
    setDialogMode('category');
    setDialogOpen(true);
  };

  const handleDialogSave = (name: string, colorId: string) => {
    if (dialogMode === 'task') {
      if (editingTask) {
        // TODO: タスクを更新
      } else {
        // TODO: 新規タスクを作成
      }
    } else {
      // TODO: 新規カテゴリを作成
    }
    setDialogOpen(false);
    setEditingTask(null);
  };

  const getCurrentTaskName = () => {
    if (!currentTask) return undefined;
    const task = tasks.find(t => t.id === currentTask.taskId);
    return task?.name;
  };

  return (
    <SafeAreaView style={{ flex: 1 }} edges={['top', 'left', 'right']}>
      <YStack flex={1} backgroundColor="$background">
        <TaskHeader 
          currentTask={currentTask} 
          taskName={getCurrentTaskName()}
        />
        
        <TaskGrid
          categories={categories}
          tasks={tasks}
          activeTaskId={activeTaskId}
          onTaskPress={handleTaskPress}
          onTaskLongPress={handleTaskLongPress}
          onAddTask={handleAddTask}
          onAddCategory={handleAddCategory}
        />

        <TaskDialog
          open={dialogOpen}
          onOpenChange={setDialogOpen}
          onSave={handleDialogSave}
          title={
            dialogMode === 'task' 
              ? (editingTask ? 'タスクを編集' : '新規タスク')
              : '新規カテゴリ'
          }
          initialName={editingTask?.name || ''}
          initialColorId={editingTask?.colorId || '1'}
        />
      </YStack>
    </SafeAreaView>
  );
};