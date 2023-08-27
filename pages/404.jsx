import { useEffect } from 'react';
import { useRouter } from 'next/router';

function Costum404() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  });

  return (
    <div>
      <h1 className="title-not-found">Ooops....</h1>
      <h1 className="title-not-found">Anda Tersesat</h1>
    </div>
  );
}

export default Costum404;
