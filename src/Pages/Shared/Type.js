import Typewriter from 'typewriter-effect';

const Type = () => {

    return (
        <div  className='mr-52 mt-5 mb-3 ms-0 font-serif text-4xl'>
            <Typewriter 
            options={{
                strings: ['Front-End Developer', 'Web Developer', 'MERN Developer'],
                autoStart: true,
                loop: true,
            }}
        />
        </div>
    );
};

export default Type;