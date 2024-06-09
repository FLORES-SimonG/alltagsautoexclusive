

import ButtonPrimary from '@/components/buttons/ButtonPrimary';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <div className="min-h-screen flex flex-col justify-center items-center bg-fixed bg-auto bg-no-repeat bg-cover">
        <div className='bg-black/10 flex flex-col gap-8 p-8  rounded'>

      <Image src="/alltagsAutoExclusive.svg" alt="logo" width={600} height={400} />
      <div className='flex flex-row gap-4'>
        <ButtonPrimary title="Suchen" size="lg" />
        <ButtonPrimary title="Vermieten" size="lg" color='transparent' />
        </div>
      </div>
        </div>

      <div className="p-10">
        <h2 className="font-bold text-4xl">
          Willkomen bei Alltagsauto-Exclusive
        </h2>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed reprehenderit aut animi perferendis? Provident, assumenda eius deserunt nisi velit commodi itaque corrupti quisquam nulla hic possimus libero aliquid impedit maiores reprehenderit quidem animi maxime fuga dolorum nesciunt labore officia. Aliquid excepturi velit vitae qui, deserunt unde atque esse laudantium modi consectetur cumque quam ipsam ab voluptatibus eos eaque tempora dolorem natus nostrum ad placeat repellat. Aut porro iste et ad officia hic, quam magnam? Eligendi culpa alias accusamus non reprehenderit fugiat! Sunt est expedita voluptas incidunt iusto perspiciatis veritatis facere, voluptatibus saepe, quod dolor repellat mollitia ut vel necessitatibus dolorum, facilis eaque. Cumque adipisci eveniet placeat tenetur? Saepe eveniet omnis facere! Nisi delectus at porro eum, aliquam temporibus magnam! Adipisci, laudantium facere! Consequatur, voluptatem rem? Necessitatibus facere, sequi placeat autem deserunt dolores itaque alias quas, nam architecto enim debitis ipsa vero, quaerat odio est ratione. Laudantium distinctio dignissimos nulla molestias.</p>
      </div>
    
      
    </div>
  );
}
