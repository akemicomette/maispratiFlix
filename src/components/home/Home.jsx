import { useState, useEffect } from 'react';
import { getGenres } from "../../services/api";
import { Search } from './NavBar';
import { Modal } from '../../components/Modal';
import { Carousel } from '../Carousel/Carousel';
import logo from '../../img/logo.png';
import './home.css';
import '../Carousel/carousel.css';

export function Home() {
  const [genres, setGenres] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const genresData = await getGenres();
        setGenres(genresData);
      } catch (error) {
        console.error('Erro ao buscar filmes e séries:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = async (query) => {
    try {
      const results = await Search(query);
      const filteredResults = results.filter(
        (item) => item.media_type === 'movie' || item.media_type === 'tv'
      );
      setSearchResults(filteredResults);
      setIsModalOpen(true);
    } catch (error) {
      console.error('Erro ao pesquisar:', error);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="home-container">
      <div className="navBar">
        <img className="navBar-logo" src={logo} alt="" />

        <Search onSearch={handleSearch} />
      </div>
      {genres.map(genre => (
        <Carousel key={genre.id} genreId={genre.id} genreName={genre.name} />
      ))}

      <div className='home-footer'>
        <p className="home-footer-noteNetflix">Todos os direitos reservados à NetFlix</p>
        <p className="home-footer-noteAPI"> Dados pegos da Api Tmdb Themoviedb.org</p>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Resultados da Pesquisa</h2>
        {searchResults.length > 0 ? (
          <div className="search-results">
            {searchResults.map((item) => (
              <div key={item.id} className="search-item">
                <img
                  src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
                  alt={item.media_type === 'movie' ? item.title : item.name}
                />
                <div className="search-item-details">
                  <h3>{item.media_type === 'movie' ? item.title : item.name}</h3>
                  <p>{item.overview}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>Nenhum resultado encontrado.</p>
        )}
      </Modal>
    </div>
  );
}
