import React, { useEffect, useState } from 'react';
import { View, Text, H2, XStack, YStack } from 'tamagui';
import { TrackedTime } from '../types';

interface TaskHeaderProps {
  currentTask: TrackedTime | null;
  taskName?: string;
}

export const TaskHeader: React.FC<TaskHeaderProps> = ({ currentTask, taskName }) => {
  const [elapsedTime, setElapsedTime] = useState<string>('00:00:00');

  useEffect(() => {
    if (!currentTask) {
      setElapsedTime('00:00:00');
      return;
    }

    const updateElapsedTime = () => {
      const now = new Date();
      const start = new Date(currentTask.startTime);
      const diff = now.getTime() - start.getTime();
      
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      
      const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes
        .toString()
        .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
      
      setElapsedTime(formattedTime);
    };

    updateElapsedTime();
    const interval = setInterval(updateElapsedTime, 1000);

    return () => clearInterval(interval);
  }, [currentTask]);

  const formatTime = (date: Date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  };

  return (
    <View backgroundColor="$gray2" paddingVertical="$4" paddingHorizontal="$6" borderBottomWidth={1} borderBottomColor="$gray4">
      {currentTask && taskName ? (
        <XStack justifyContent="space-between" alignItems="center">
          <YStack flex={1}>
            <H2 size="$6" color="$gray12">{taskName}</H2>
            <Text color="$gray11" fontSize="$3">
              開始時刻: {formatTime(new Date(currentTask.startTime))}
            </Text>
          </YStack>
          <View backgroundColor="$blue5" paddingHorizontal="$4" paddingVertical="$2" borderRadius="$3">
            <Text fontSize="$7" fontWeight="bold" color="$blue12" fontFamily="$body">
              {elapsedTime}
            </Text>
          </View>
        </XStack>
      ) : (
        <YStack alignItems="center">
          <Text fontSize="$5" color="$gray11">タスクを選択してください</Text>
        </YStack>
      )}
    </View>
  );
};