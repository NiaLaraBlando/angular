import { Injectable } from '@angular/core';

export interface Movie {
    title: string;
    year: number;
    description: string;
    cover: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataPeliculasService {
  peliculas: Movie[] = [{
            title: 'The Shawshank Redemption',
            year: 1994,
            description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
            cover: 'covers/TheShawshankRedemption.jpg'
        },
        {
            title: 'The Godfather',
            year: 1972,
            description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
            cover: 'covers/TheGodfather.jpg'
        },
        {
            title: 'The Dark Knight',
            year: 2008,
            description: 'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.',
            cover: 'covers/TheDarkKnight.jpg'
        },
        {
            title: 'Pulp Fiction',
            year: 1994,
            description: 'The lives of two mob hitmen, a boxer, a gangster\'s wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
            cover: 'covers/PulpFiction.jpg'
        },
        {
            title: 'Forrest Gump',
            year: 1994,
            description: 'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75.',
            cover: 'covers/ForrestGump.jpg'
        },
        {
            title: 'Inception',
            year: 2010,
            description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
            cover: 'covers/Inception.jpg'
        },
        {
            title: 'The Matrix',
            year: 1999,
            description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
            cover: 'covers/TheMatrix.jpg'
        },
        {
            title: 'Interstellar',
            year: 2014,
            description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity’s survival.',
            cover: 'covers/Interstellar.jpg'
        },
        {
            title: 'Gladiator',
            year: 2000,
            description: 'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.',
            cover: 'covers/Gladiator.jpg'
        },
        {
            title: 'The Lion King',
            year: 1994,
            description: 'Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.',
            cover: 'covers/TheLionKing.jpg'
        }
    ];
  constructor() { }

  getPeliculas(): Movie[] {
    return this.peliculas;
  }
}
