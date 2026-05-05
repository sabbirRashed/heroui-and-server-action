// import { CircleDollar } from "@gravity-ui/icons";
import { Card, Link } from "@heroui/react";

const TasksCard = ({task}) => {
    const {title, description, category, status } = task;
    return (
        <div className="">
            <Card className="border border-gray-600"
                variant="tertiary">
                {/* <CircleDollar aria-label="Dollar sign icon" className="text-primary size-6" role="img" /> */}
                <Card.Header>
                    <Card.Title>{title}</Card.Title>
                    <Card.Description>
                        {description}
                    </Card.Description>
                </Card.Header>
                <Card.Footer>
                    <Link
                        aria-label="Go to Acme Creator Hub (opens in new tab)"
                        href="https://heroui.com"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        Creator Hub
                        <Link.Icon aria-hidden="true" />
                    </Link>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default TasksCard;