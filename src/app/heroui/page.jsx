import { Button, ButtonGroup } from '@heroui/react';


const HeroComponents = () => {
    return (
        <div className='w-8/12 mx-auto mt-15'>
            <h2 className='mb-5 text-2xl'>HeroUI Buttons:</h2>
            <div className='space-x-2'>
                <Button>Click me!</Button>
                <Button variant='secondary'>Click me!</Button>
                <Button variant='tertiary'>Click me!</Button>
                <Button variant='outline'>Click me!</Button>
                <Button variant='ghost'>Click me!</Button>
                <Button variant='danger-soft'>Click me!</Button>
                <ButtonGroup>
                    <Button>First</Button>
                    <Button>
                        <ButtonGroup.Separator />
                        Second
                    </Button>
                    <Button>
                        <ButtonGroup.Separator />
                        Third
                    </Button>
                </ButtonGroup>
            </div>
        </div>
    );
};

export default HeroComponents;