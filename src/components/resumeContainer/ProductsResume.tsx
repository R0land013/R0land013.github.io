import ReactMarkdown from 'react-markdown';
import products from '../../data/products';

export default function ProductsResume() {
    return (
        <div className="flex flex-col justify-start w-full">

            {products.map((aProduct, index) => (
                
                <div className={`flex flex-col justify-start w-full ${index !== 0 ? 'mt-24' : ''}`} key={aProduct.name}>

                    <div className="flex flex-row justify-start items-center mb-3">
                    
                        {aProduct.iconPath ?
                            <img
                                className='w-16 mr-3'
                                src={aProduct.iconPath}/>  : null}
                        
                        <h2 className='text-3xl font-semibold text-black'>{aProduct.name}</h2>
                    
                    </div>

                    <ReactMarkdown className='w-full text-black'>
                        {aProduct.markdownDescription}
                    </ReactMarkdown>

                </div>

            ))}
        </div>
    );
}
