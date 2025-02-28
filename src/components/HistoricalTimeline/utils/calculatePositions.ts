export const calculatePositions = (
  radius: number,
  numCircles: number,
  activeIndex: number
) => {
  const angleStep = (2 * Math.PI) / numCircles;
  const initialAngle = -Math.PI / 4;
  const positions = [];

  for (let i = 0; i < numCircles; i++) {
    const angle = initialAngle + (i - activeIndex) * angleStep;
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);
    positions.push({ x, y });
  }

  return positions;
};
