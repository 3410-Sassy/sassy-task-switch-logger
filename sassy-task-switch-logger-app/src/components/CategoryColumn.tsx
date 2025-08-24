import React from 'react';
import { ScrollView, YStack, Text, Button } from 'tamagui';
import { Plus } from '@tamagui/lucide-icons';
import { Category, Task } from '../types';
import { TaskButton } from './TaskButton';

interface CategoryColumnProps {
  category: Category;
  tasks: Task[];
  activeTaskId: string | null;
  onTaskPress: (task: Task) => void;
  onTaskLongPress: (task: Task) => void;
  onAddTask: () => void;
}

export const CategoryColumn: React.FC<CategoryColumnProps> = ({
  category,
  tasks,
  activeTaskId,
  onTaskPress,
  onTaskLongPress,
  onAddTask,
}) => {
  const categoryTasks = tasks
    .filter(task => task.categoryId === category.id)
    .sort((a, b) => a.order - b.order);

  return (
    <YStack flex={1} minWidth="$20" maxWidth="$25" paddingHorizontal="$2">
      <Text 
        fontSize="$5" 
        fontWeight="bold" 
        color="$gray12" 
        marginBottom="$3"
        textAlign="center"
      >
        {category.name}
      </Text>
      
      <ScrollView 
        flex={1} 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 16 }}
      >
        <YStack space="$2">
          {categoryTasks.map((task) => (
            <TaskButton
              key={task.id}
              task={task}
              isActive={task.id === activeTaskId}
              onPress={() => onTaskPress(task)}
              onLongPress={() => onTaskLongPress(task)}
            />
          ))}
        </YStack>
      </ScrollView>
      
      <Button
        onPress={onAddTask}
        backgroundColor="$gray5"
        borderRadius="$4"
        height="$5"
        marginTop="$2"
        icon={Plus}
        pressStyle={{
          backgroundColor: '$gray6',
        }}
      >
        <Text color="$gray11">タスクを追加</Text>
      </Button>
    </YStack>
  );
};