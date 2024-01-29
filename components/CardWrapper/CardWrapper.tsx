import {
  Card,
  CardContent,
  CardFooter,
  CardDescription,
  CardTitle,
  CardHeader,
} from "../ui/card";
interface CardWrapperProps {
  isHeader: boolean;
  title?: string;
  classes?: string;
  description?: string;
  contentClasses?: string;
  children: React.ReactNode;
  cardFooterChildren?: React.ReactNode;
}

const CardWrapper: React.FC<CardWrapperProps> = (props) => {
  const {
    title,
    classes,
    children,
    description,
    contentClasses,
    isHeader = false,
    cardFooterChildren,
  } = props;
  return (
    <Card className={`${classes ? classes : ""} w-[550px] rounded-lg p-0`}>
      {isHeader && (
        <CardHeader className={` flex items-center`}>
          {title && (
            <CardTitle className={` text-3xl pb-1 mb-0`}>{title}</CardTitle>
          )}
          {description && (
            <CardDescription className="text-sm">{description}</CardDescription>
          )}
        </CardHeader>
      )}
      <CardContent className={`${contentClasses ? contentClasses : ""}`}>
        {children}
      </CardContent>
      {cardFooterChildren && <CardFooter>{cardFooterChildren}</CardFooter>}
    </Card>
  );
};

export default CardWrapper;
