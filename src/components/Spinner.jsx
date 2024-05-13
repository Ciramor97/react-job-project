import ClipLoader from 'react-spinners/ClipLoader';

export default function Spinner({ loading }) {
  const override = {
    display: 'block',
    margin: '0 auto',
    // borderColor: 'red',
  };
  return (
    <ClipLoader
      color="#4338ca"
      loading={loading}
      cssOverride={override}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
}
