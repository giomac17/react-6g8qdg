import React from 'react';
import '../style.css';

import TitleHeader from '../components/TitleHeader';
import VideoList from '../components/VideoList';

export default function Home() {
  //console.log('hello');

  const data = {
    titleData: {
      title: 'House of cats',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      notes:
        'when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
    lists: ['Continua a guardare', 'Novità', 'Commedia'],
  };

  console.log();
  data.lists.map((elementocorrente) => {
    console.log(elementocorrente);
    elementocorrente;
  });

  return (
    <>
      <TitleHeader titles={data.titleData} />
      {data.lists.map((elem) => (
        <VideoList title={elem} />
      ))}
    </>
  );
}
