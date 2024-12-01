import { BlinkingCursor } from './blinking-cursor';
import { RewritingTextAnimation } from './rewriting-text-animation';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const texts = [
  'i think i should delete this',
  'yes that is better',
  'actually no',
  'hold up',
];

const RewritingTextAnimationCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Rewriting Text Animation</CardTitle>
      </CardHeader>
      <CardContent>
        <RewritingTextAnimation texts={texts} />
        <BlinkingCursor />
      </CardContent>
    </Card>
  );
};

export { RewritingTextAnimationCard };
