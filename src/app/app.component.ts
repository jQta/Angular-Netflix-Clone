import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'netflix-app';

  isDark: boolean = true;
  theme: string = "☀️";

  changeDark = () => {
    if (this.isDark == false) {
      this.isDark = true;
      this.theme = "☀️";
    } else {
      this.isDark = false;
      this.theme = "🌙";
    }
  }

  navLinks = [
    {
      name: "Inicio",
      link: "#inicio"
    },
    {
      name: "Series TV",
      link: "#seriestv"
    },
    {
      name: "Películas",
      link: "#peliculas"
    },
    {
      name: "Más recientes",
      link: "#masrecientes"
    },
    {
      name: "Mi Lista",
      link: "#milista"
    }
  ];

  heroTop = {
    section: "Los 5 más populares hoy",
    films: [
      {
        name: "La casa de papel",
        photo: "../assets/images/Top10/1-papel.webp"
      },
      {
        name: "La reina",
        photo: "../assets/images/Top10/2-reina.webp"
      },
      {
        name: "Titanes",
        photo: "../assets/images/Top10/3-titanes.webp"
      },
      {
        name: "Lost in Space",
        photo: "../assets/images/Top10/4-lostinspace.webp"
      },
      {
        name: "Donde caben dos",
        photo: "../assets/images/Top10/5-dondecaben.webp"
      }
    ]
  }

  comedyFilms = {
    section: "Comedia",
    films: [
      {
        name: "Casi 300",
        photo: "../assets/images/Comedia/casi300.webp"
      },
      {
        name: "Cazafantasmas",
        photo: "../assets/images/Comedia/cazafantasmas.webp"
      },
      {
        name: "Dictador",
        photo: "../assets/images/Comedia/dictador.webp"
      },
      {
        name: "Erase hollywood",
        photo: "../assets/images/Comedia/erasehollywood.webp"
      },
      {
        name: "Family guy",
        photo: "../assets/images/Comedia/family guy.webp"
      },
      {
        name: "Juerga",
        photo: "../assets/images/Comedia/juerga.webp"
      },
      {
        name: "Last Terminal",
        photo: "../assets/images/Comedia/laterminal.webp"
      },
      {
        name: "Los padres de ella",
        photo: "../assets/images/Comedia/padresella.webp"
      },
    ]
  }

  actionFilms = {
    section: "Acción",
    films: [
      {
        name: "Ejercito Muertos",
        photo: "../assets/images/Accion/ejercitomuertos.jpg"
      },
      {
        name: "El protector",
        photo: "../assets/images/Accion/elprotector.webp"
      },
      {
        name: "Equalizer 2",
        photo: "../assets/images/Accion/equalizer2.webp"
      },
      {
        name: "Heat",
        photo: "../assets/images/Accion/heat.webp"
      },
      {
        name: "Jack Reacher",
        photo: "../assets/images/Accion/jackreacher.webp"
      },
      {
        name: "John Wick 2",
        photo: "../assets/images/Accion/johnwick2.webp"
      },
      {
        name: "Kill Bill 2",
        photo: "../assets/images/Accion/killbill2.webp"
      },
      {
        name: "Mision Imposible Nacion",
        photo: "../assets/images/Accion/misionimposiblenacion.webp"
      }
    ]
  }

  dramaFilms = {
    section: "Drama",
    films: [
      {
        name: "1917",
        photo: "../assets/images/Drama/1917.webp"
      },
      {
        name: "arrival",
        photo: "../assets/images/Drama/arrival.webp"
      },
      {
        name: "El club de la lucha",
        photo: "../assets/images/Drama/clublucha.webp"
      },
      {
        name: "Corazones de acero",
        photo: "../assets/images/Drama/corazones.webp"
      },
      {
        name: "Culpable",
        photo: "../assets/images/Drama/culpable.jpg"
      },
      {
        name: "Milla Verde",
        photo: "../assets/images/Drama/millaverde.webp"
      },
      {
        name: "Naufrago",
        photo: "../assets/images/Drama/naufrago.webp"
      },
      {
        name: "No es pais para viejos",
        photo: "../assets/images/Drama/noespais.webp"
      }
    ]
  }
}
