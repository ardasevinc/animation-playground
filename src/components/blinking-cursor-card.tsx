import { BlinkingCursor } from './blinking-cursor';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const BlinkingCursorCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Blinking Cursor</CardTitle>
      </CardHeader>
      <CardContent>
        <BlinkingCursor />
      </CardContent>
    </Card>
  );
};

export { BlinkingCursorCard };
