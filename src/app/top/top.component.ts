import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';


@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {
  contents1: { title: string, content: string }[] = [
    { title: 'Estudia tu producto al detalle', content: 'Si no crees en tu producto ¿quién va a creer en él? Antes de lanzarte a venderlo debes conocerlo al detalle si realmente quieres que los consumidores confíen en ti, ¿cómo sino vas a responder sus dudas? ¿Y a darles consejos para sacarle provecho? '+ 'Así que estudia todos los detalles, su historia, sus reconocimientos y, sobre todo, la propuesta de valor.'+ 'Del mismo modo, debes estudiar a fondo la marca y utilizar cierto tipo de mensajes publicitarios establecidos, usar el mismo tono, etc.' },
    { title: 'Sigue un proceso', content: 'Uno de los primeros errores es pensar que un buen vendedor es aquella persona que tiene la habilidad de convencer a cualquiera en cualquier momento. La verdad es que ninguna venta ocurre por casualidad, siempre hay un proceso que necesita ser seguido, al menos cuando hablamos de alguien que tiene un desempeño regular, sin grandes oscilaciones. Por tener un proceso de ventas bien definido y seguirlo tú podrás anticipar el comportamiento de los clientes y actuar de forma que ellos continúen interesados ​​en la compra.' },
    { title: 'Utiliza toda la ayuda que puedas encontrar', content: 'No hay vergüenza alguna en pedir ayuda y aprovechar las oportunidades que tienes de tener tu trabajo facilitado. Por lo tanto, utiliza toda la ayuda disponible. Por ejemplo, elige buenas herramientas de ventas que te hagan más productivo y te ayuden a aumentar la eficiencia de tu proceso. Además, observa a vendedores con más experiencia y pide consejos cuando sea apropiado. Incluso las acciones que parecen pequeñas ciertamente van a marcar la diferencia y te convertirán en un profesional más completo y confiado.' },
    { title: 'Conoce a tu cliente', content: 'Si conocer el producto es importante, entender cómo el cliente actúa y piensa no se queda atrás, pues eso te crea una situación favorable, con algunas ventajas. Una de ellas es la oportunidad de personalizar mejor tu enfoque y centrarte en los puntos de mayor interés para la persona, haciendo que se sienta más cómoda para continuar con la negociación.' },
    { title: 'Sé más persuasivo', content: 'La persuasión, es decir, el poder de convencer a las personas, es un arte que va a transformar del agua al vino tu potencial de ventas. Pensando bien, podemos decir que la mayoría de las veces el cliente desea ser convencido. Esto significa que ha encontrado la oferta ideal, que se ajusta a tus necesidades.' },
    { title: 'Aprende a escuchar', content: 'No sea aquel vendedor que habla demasiado en el intento de impresionar al cliente o vencerlo por el cansancio. Esta táctica puede, incluso, funcionar con algunas personas, pero no es un buen modelo a seguir. Más importante es aprender a escuchar lo que los clientes tienen que decir. Escucha atentamente sus dudas, problemas, objetivos y luego responde con algo relevante.' },
    { title: 'Colócate como un especialista', content: '¿Tú probablemente ya compraste — o compras regularmente — algo por la atención especializada que se te brinda, no es así? Tal vez tu oferta no sea tan buena como la de un competidor, pero la forma en que te posicionas y generas valor para el cliente durante el proceso pueden ser decisivos.' },
    { title: 'Mantente bien informado', content: 'Algo fundamental a destacar es que incluso después de convertirte en un buen vendedor no hay espacio para sentirte cómodo. No existe técnica infalible o método que funcione para siempre. Acompaña los blogs de seguimiento de ventas, descarga materiales para enriquecer tus conocimientos sobre el tema, aprende de los errores del pasado y lo que otros están haciendo de nuevo.' }
  ];

  contents2: { title: string, content: string }[] = [
    { title: 'Estudia también a tu cliente', content: 'Si conocer el producto es FUNDAMENTAL, conocer al cliente puede que lo sea aún más. ¿Recuerdas cuando hablábamos de la importancia de la empatía para ser un buen vendedor? Entonces, ¿cómo pretendes ponerte en la piel de tus clientes si no sabes quiénes son?' },
    { title: 'Sé un buen planificador', content: 'Es muy probable que tu escenario ideal de trabajo no implica negociar con un cliente solo a la vez, ¿verdad? Por eso, tú necesitas adquirir la capacidad de planificar bien. La falta de planificación puede resultar en conflictos de agenda, cancelación de reuniones, información intercambiada y otros inconvenientes, lo que nunca es bueno para las ventas. Por eso, sea organizado para siempre honrar con tus compromisos de forma puntual y mostrarse bien preparado para atender las demandas de todos los prospectos con quienes estés negociando.' },
    { title: 'Conoce tu producto', content: 'Nadie confía en un vendedor que no tiene convicción en el producto que está vendiendo, y peor aún es el caso de quien ni siquiera sabe de lo que está hablando. Por eso, debes estar dispuesto a conocer cada detalle del producto o servicio que vendes, pues eso es esencial para pasarle confianza a los clientes.' },
    { title: 'Demuestra empatía', content: 'La empatía es la habilidad de ponerse en lugar de otros, y es crucial que sepas hacer esto para aprender cómo ser un buen vendedor. A nadie le gusta tratar con una persona que solo piensa en los propios intereses y objetivos, y cuando un vendedor no tiene en cuenta la situación del cliente es exactamente esa imagen que pasa.' },
    { title: 'Sé honesto', content: 'Desafortunadamente, la profesión de vendedor todavía tiene una mancha desagradable por las malas prácticas que muchos insisten en seguir. Una de ellas implica la idea de que para vender bastante es necesario engañar a los clientes y hacerlos comprar más de lo que realmente necesitan, o en algunos casos hasta adquirir un producto que no será de ayuda alguna.' },
    { title: 'Perfecciónate en el arte del seguimiento', content: 'Se equivoca quien piensa que las ventas ocurren siempre en el primer contacto. En la mayoría de los casos, es más difícil que eso y se hace necesario realizar algunas reuniones hasta que la situación se finaliza. Es ahí donde entra el seguimiento, que es básicamente el retorno que tienes que realizar para mantener vivo el interés del prospecto y, de esa forma, evitar que un competidor te lo arrebate.' },
    { title: 'Trabaja para el éxito de tus clientes', content: 'Un vendedor común trabaja por la venta, pero un profesional diferenciado va más allá y apunta al éxito de los clientes. ¿Por qué? El raciocinio es muy simple: el éxito de tu cliente es también tu éxito, a medida que conquista buenos resultados con el producto que vendiste, la tendencia es que continúe comprando.' },
    { title: 'Aprende a trabajar la post-venta', content: 'Tal vez piensas que la post-venta no se encuadra tan bien en el papel del vendedor, ya que debe ser realizado por otro profesional. Pero no es así. Incluso, pensando de forma práctica, una post-venta bien hecha puede resultar en ventas futuras, entonces está directamente ligado a la fidelización.' }
  ];

  constructor() { }

  currentIndex1: number = 0;
  currentIndex2: number = 0;

  ngOnInit(): void {
    this.startContentRotation();
  }

  startContentRotation(): void {
    interval(5000) //Cambiar el tiempo cada 5 segundos.
      .pipe(take(this.contents1.length))
      .subscribe(() => {
        this.currentIndex1 = (this.currentIndex1 + 1) % this.contents1.length;
      });

    interval(5000)
      .pipe(take(this.contents2.length))
      .subscribe(() => {
        this.currentIndex2 = (this.currentIndex2 + 1) % this.contents2.length;
      });
  }
}
