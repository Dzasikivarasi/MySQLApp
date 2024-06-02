import { useSelector } from 'react-redux';
import './loading.css';
import { RootState } from '../../app/store';

export default function Loading(): JSX.Element {
  const isLoading = useSelector((state: RootState) => state.loading);

  return (
    <>
      {isLoading && (
        <div className="spinner-container">
          <div className="spinner"></div>
        </div>
      )}
    </>
  );
}
