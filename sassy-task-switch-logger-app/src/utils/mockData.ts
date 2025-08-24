import { Category, Task } from '../types';

export const mockCategories: Category[] = [
  {
    id: '1',
    name: 'MTG',
    order: 0,
  },
  {
    id: '2',
    name: '開発',
    order: 1,
  },
  {
    id: '3',
    name: 'Slack',
    order: 2,
  },
];

export const mockTasks: Task[] = [
  {
    id: '1',
    name: 'デイリースタンドアップ',
    categoryId: '1',
    colorId: '1',
    order: 0,
  },
  {
    id: '2',
    name: 'スプリントプランニング',
    categoryId: '1',
    colorId: '2',
    order: 1,
  },
  {
    id: '3',
    name: 'レトロスペクティブ',
    categoryId: '1',
    colorId: '3',
    order: 2,
  },
  {
    id: '4',
    name: 'フロントエンド開発',
    categoryId: '2',
    colorId: '4',
    order: 0,
  },
  {
    id: '5',
    name: 'バックエンド開発',
    categoryId: '2',
    colorId: '5',
    order: 1,
  },
  {
    id: '6',
    name: 'テスト実装',
    categoryId: '2',
    colorId: '6',
    order: 2,
  },
  {
    id: '7',
    name: 'コードレビュー',
    categoryId: '2',
    colorId: '7',
    order: 3,
  },
  {
    id: '8',
    name: 'チーム連絡',
    categoryId: '3',
    colorId: '8',
    order: 0,
  },
  {
    id: '9',
    name: 'カスタマーサポート',
    categoryId: '3',
    colorId: '9',
    order: 1,
  },
];

export const mockGoogleCalendarColors = {
  '1': { background: '#7986cb', foreground: '#1d1d1d' },
  '2': { background: '#33b679', foreground: '#1d1d1d' },
  '3': { background: '#8e24aa', foreground: '#1d1d1d' },
  '4': { background: '#e67c73', foreground: '#1d1d1d' },
  '5': { background: '#f6bf26', foreground: '#1d1d1d' },
  '6': { background: '#f4511e', foreground: '#1d1d1d' },
  '7': { background: '#039be5', foreground: '#1d1d1d' },
  '8': { background: '#616161', foreground: '#1d1d1d' },
  '9': { background: '#3f51b5', foreground: '#1d1d1d' },
  '10': { background: '#0b8043', foreground: '#1d1d1d' },
  '11': { background: '#d50000', foreground: '#1d1d1d' },
};