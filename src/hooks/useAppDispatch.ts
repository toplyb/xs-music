import { useDispatch } from 'react-redux';
import type { RootDispatch } from '@/app/store.ts';

export const useAppDispatch = () => useDispatch<RootDispatch>();
