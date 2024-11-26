import { Link } from '@tanstack/react-router';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const animations = [
  {
    href: '/number-animations',
    label: 'Number Animations',
    description: 'Number animation go brrr...',
  },
  {
    href: '/typing-animations',
    label: 'Typing Animations',
    description: 'All the typing animations',
  },
];

const AnimationsList = () => {
  return (
    <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-x-3'>
      {animations.map((animation) => (
        <li key={animation.href}>
          <Link to={animation.href}>
            <Card className='hover:border hover:border-slate-600 transition-all duration-300'>
              <CardHeader>
                <CardTitle className='text-xl'>{animation.label}</CardTitle>
              </CardHeader>
              <CardContent>{animation.description}</CardContent>
            </Card>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export { AnimationsList };
