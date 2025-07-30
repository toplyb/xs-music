import styles from './index.module.less';
import React, { useEffect, useRef, useState } from 'react';

export interface ProgressProps {
  width: string;
  value?: number;
  onChange?: (value: number) => void;
}

const Progress: React.FC<ProgressProps> = ({ width, value = 0, onChange }) => {
  const BALL_SIZE = 15;
  const [dragging, setDragging] = useState(false);
  const [left, setLeft] = useState(value * (Number(width) - BALL_SIZE));
  const parentRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);

  const handleMouseDown = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();
    setDragging(true);
  };

  useEffect(() => {
    if (!dragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!parentRef.current) return;
      const rect = parentRef.current.getBoundingClientRect();

      // 计算鼠标相对进度条左边距离
      let newLeft = e.clientX - rect.left;
      // 限制范围
      newLeft = Math.max(0, Math.min(newLeft, rect.width - BALL_SIZE));

      setLeft(newLeft);
      if (onChange) onChange(newLeft / (rect.width - BALL_SIZE));
    };

    const handleMouseUp = () => {
      setDragging(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [dragging]);
  return (
    <div ref={parentRef} className={styles.progress} style={{ width: width + 'px' }}>
      <div
        style={{
          position: 'absolute',
          height: '100%',
          width: left > 0 ? `${left + BALL_SIZE}px` : '0px',
          backgroundColor: '#000',
          borderRadius: '10px',
        }}
      />
      <span
        ref={progressRef}
        onMouseDown={handleMouseDown}
        className={styles.button}
        style={{ left: left }}
      ></span>
    </div>
  );
};

export default Progress;
