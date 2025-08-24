import React, { useState } from 'react';
import { 
  Dialog, 
  Sheet, 
  Button, 
  Input, 
  Label, 
  XStack, 
  YStack,
  H2,
  ScrollView,
  View,
  Text
} from 'tamagui';
import { X } from '@tamagui/lucide-icons';
import { mockGoogleCalendarColors } from '../utils/mockData';

interface TaskDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (name: string, colorId: string) => void;
  initialName?: string;
  initialColorId?: string;
  title: string;
}

export const TaskDialog: React.FC<TaskDialogProps> = ({
  open,
  onOpenChange,
  onSave,
  initialName = '',
  initialColorId = '1',
  title,
}) => {
  const [name, setName] = useState(initialName);
  const [selectedColorId, setSelectedColorId] = useState(initialColorId);

  const handleSave = () => {
    if (name.trim()) {
      onSave(name.trim(), selectedColorId);
      setName('');
      setSelectedColorId('1');
      onOpenChange(false);
    }
  };

  const handleClose = () => {
    setName(initialName);
    setSelectedColorId(initialColorId);
    onOpenChange(false);
  };

  return (
    <Sheet
      modal
      open={open}
      onOpenChange={onOpenChange}
      snapPoints={[85]}
      dismissOnSnapToBottom
      zIndex={100_000}
    >
      <Sheet.Frame>
        <Sheet.Handle />
        <YStack padding="$4" flex={1}>
          <XStack justifyContent="space-between" alignItems="center" marginBottom="$4">
            <H2 size="$6">{title}</H2>
            <Button
              size="$3"
              circular
              icon={X}
              onPress={handleClose}
              chromeless
            />
          </XStack>

          <YStack space="$4" flex={1}>
            <YStack space="$2">
              <Label htmlFor="task-name">名前</Label>
              <Input
                id="task-name"
                value={name}
                onChangeText={setName}
                placeholder="タスク名を入力"
                size="$4"
                autoFocus
              />
            </YStack>

            <YStack space="$2" flex={1}>
              <Label>カラー</Label>
              <ScrollView flex={1} showsVerticalScrollIndicator={false}>
                <XStack flexWrap="wrap" gap="$2">
                  {Object.entries(mockGoogleCalendarColors).map(([id, color]) => (
                    <Button
                      key={id}
                      onPress={() => setSelectedColorId(id)}
                      backgroundColor={color.background}
                      width="$5"
                      height="$5"
                      borderRadius="$2"
                      borderWidth={selectedColorId === id ? 3 : 0}
                      borderColor={selectedColorId === id ? '$blue10' : undefined}
                      padding={0}
                      pressStyle={{
                        scale: 0.95,
                      }}
                    >
                      {selectedColorId === id && (
                        <Text fontSize="$6" color={color.foreground}>✓</Text>
                      )}
                    </Button>
                  ))}
                </XStack>
              </ScrollView>
            </YStack>
          </YStack>

          <XStack gap="$3" marginTop="$4">
            <Button flex={1} onPress={handleClose} chromeless>
              キャンセル
            </Button>
            <Button 
              flex={1} 
              onPress={handleSave}
              disabled={!name.trim()}
              backgroundColor="$blue9"
              color="white"
            >
              保存
            </Button>
          </XStack>
        </YStack>
      </Sheet.Frame>
    </Sheet>
  );
};