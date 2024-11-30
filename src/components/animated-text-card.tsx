import { AnimatedText } from './animated-text';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const AnimatedTextCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Typewriter Animation</CardTitle>
      </CardHeader>
      <CardContent>
        <AnimatedText baseText='typewriter effect' />
      </CardContent>
    </Card>
  );
};

export { AnimatedTextCard };
