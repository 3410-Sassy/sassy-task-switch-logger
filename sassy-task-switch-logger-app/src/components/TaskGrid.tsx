import React from 'react';
import { ScrollView, XStack, YStack, Button, Text } from 'tamagui';
import { Plus } from '@tamagui/lucide-icons';
import { Category, Task } from '../types';
import { CategoryColumn } from './CategoryColumn';

interface TaskGridProps {
  categories: Category[];
  tasks: Task[];
  activeTaskId: string | null;
  onTaskPress: (task: Task) => void;
  onTaskLongPress: (task: Task) => void;
  onAddTask: (categoryId: string) => void;
  onAddCategory: () => void;
}

export const TaskGrid: React.FC<TaskGridProps> = ({
  categories,
  tasks,
  activeTaskId,
  onTaskPress,
  onTaskLongPress,
  onAddTask,
  onAddCategory,
}) => {
  const sortedCategories = [...categories].sort((a, b) => a.order - b.order);

  return (
    <ScrollView 
      horizontal 
      flex={1}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 16 }}
    >
      <XStack flex={1} space="$4">
        {sortedCategories.map((category) => (
          <CategoryColumn
            key={category.id}
            category={category}
            tasks={tasks}
            activeTaskId={activeTaskId}
            onTaskPress={onTaskPress}
            onTaskLongPress={onTaskLongPress}
            onAddTask={() => onAddTask(category.id)}
          />
        ))}
        
        <YStack minWidth="$20" justifyContent="center" alignItems="center" paddingHorizontal="$2">
          <Button
            onPress={onAddCategory}
            backgroundColor="$gray5"
            borderRadius="$4"
            size="$6"
            circular
            icon={Plus}
            pressStyle={{
              backgroundColor: '$gray6',
            }}
          />
          <Text color="$gray11" marginTop="$2" fontSize="$3">
            カテゴリを追加
          </Text>
        </YStack>
      </XStack>
    </ScrollView>
  );
};