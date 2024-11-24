import { Link } from '@tanstack/react-router';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const animations = [{ href: '/number-animations', label: 'Number Animations' }];

const AnimationsList = () => {
  return (
    <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
      {animations.map((animation) => (
        <li key={animation.href}>
          <Link to={animation.href}>
            <Card>
              <CardHeader>
                <CardTitle className='text-xl'>{animation.label}</CardTitle>
              </CardHeader>
              <CardContent>Number animation go brrr...</CardContent>
            </Card>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export { AnimationsList };
