import React from 'react';
import { Button, View, Text } from 'tamagui';
import { Task } from '../types';
import { mockGoogleCalendarColors } from '../utils/mockData';

interface TaskButtonProps {
  task: Task;
  isActive: boolean;
  onPress: () => void;
  onLongPress: () => void;
}

export const TaskButton: React.FC<TaskButtonProps> = ({ 
  task, 
  isActive, 
  onPress, 
  onLongPress 
}) => {
  const color = mockGoogleCalendarColors[task.colorId] || mockGoogleCalendarColors['1'];
  
  return (
    <Button
      onPress={onPress}
      onLongPress={onLongPress}
      backgroundColor={color.background}
      borderWidth={isActive ? 3 : 0}
      borderColor={isActive ? '$blue10' : undefined}
      borderRadius="$4"
      height="$6"
      paddingHorizontal="$3"
      marginVertical="$2"
      animation="quick"
      scale={isActive ? 0.98 : 1}
      opacity={isActive ? 0.9 : 1}
      pressStyle={{
        scale: 0.95,
        opacity: 0.8,
      }}
    >
      <Text 
        color={color.foreground} 
        fontSize="$4" 
        fontWeight="500"
        numberOfLines={2}
        textAlign="center"
      >
        {task.name}
      </Text>
    </Button>
  );
};