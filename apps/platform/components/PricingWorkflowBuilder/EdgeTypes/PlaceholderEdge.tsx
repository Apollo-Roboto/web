import React from 'react';
import { getBezierPath, EdgeProps } from 'reactflow';

import styles from './EdgeTypes.module.css';

export default function CustomEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style,
  markerEnd,
}: EdgeProps) {
  const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  return <path id={id} style={style} className={styles.placeholderPath} d={edgePath} markerEnd={markerEnd} />;
}
