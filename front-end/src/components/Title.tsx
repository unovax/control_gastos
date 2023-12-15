
interface TitleProps {
    title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <div className='flex space-x-4 items-center border-b border-gray-600 p-4'>
        <img src='src/assets/react.svg' alt='logo' className='' />
        <h1 className='text-xl font-bold'>{ title }</h1>
    </div>
  );
};

export default Title;
