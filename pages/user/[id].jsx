import { useRouter } from 'next/router';

function IdUsers() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      Halo
      {' '}
      {id}
    </div>
  );
}

export default IdUsers;
