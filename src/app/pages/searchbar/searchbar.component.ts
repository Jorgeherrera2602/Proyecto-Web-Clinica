import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from "../compartido/footer/footer.component";
import { HeaderComponent } from "../compartido/header/header.component";

interface BlogDato {
  id: number;
  title: string;
  description: string;
  detail: string;
  author: string;
  image: string;
  category: string;
}

@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [CommonModule, FooterComponent, FormsModule, HeaderComponent],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.css'
})
export class SearchbarComponent {
  searchTerm = '';
  selectedCategory = 'Todas';
  selectedBlog: BlogDato | null = null;

  blogdatos: BlogDato[] = [
    {
      id: 1,
      title: '¿Cuáles son las áreas de un laboratorio clínico?',
      description: 'La función del análisis de muestras biológicas como sangre, orina, heces y tejidos.',
      detail: `Un laboratorio clínico se divide en áreas especializadas como hematología, microbiología, bioquímica, inmunología y banco de sangre. 
Cada una cumple una función específica en el diagnóstico de enfermedades y seguimiento de tratamientos médicos.`,
      author: 'Paola Lazo Rojas',
      image: 'assets/Imagenes-Inicio/Blog/img1.png',
      category: 'Laboratorio',
    },
    {
      id: 2,
      title: '¿Cuándo llevar a los niños a su primera visita al dentista?',
      description: 'La primera visita de los niños al odontólogo.',
      detail: `Cada vez vemos más niños muy pequeños con problemas de caries. Por eso, los odontólogos recomiendan, por un lado, iniciar la higiene bucal a edad muy temprana, incluso, antes de que aparezca el primer diente y, por otro, acudir al dentista por primera vez cuando el bebé cumpla su primer año de edad.

Al cumplir su primer año, visita al dentista

Hace años, la recomendación de los pediatras era realizar la primera revisión dental cuando la dentadura de leche, compuesta por 20 dientes, estuviera completa, es decir, alrededor de los tres años. Sin embargo, la presencia de caries en los preescolares y la aparición en niños menores de 3 años de otros problemas asociados a la primera dentición han forzado a los especialistas a cambiar la recomendación a los 12 meses, en función de establecer medidas preventivas. Tras la primera revisión, los controles se deben realizar, si todo va bien, una vez al año.

La primera visita de los niños al odontólogo

El profesional le hará una revisión de dientes y encías, verá si existen caries del biberón, se evaluarán posibles problemas como mordida cruzada, abierta o alteraciones de crecimiento y, seguramente, iniciará un historial sobre los antecedentes médicos y dentales del niño. Es el momento de corregir a tiempo malos hábitos e introducir desde temprano buenos hábitos de limpieza.

Cuando llegue el momento de acudir al dentista, los padres deben esforzarse por transmitir a su hijo una sensación de confianza y de seguridad. Es necesario que entre el niño y el dentista haya una buena relación y no se creen miedos o temores desde el principio.

Examina los dientes del bebé

Conviene tener el hábito de examinar regularmente los dientes del bebé. Ten en cuenta que los dientes saludables tienen un color blanco uniforme. Si ves manchas o puntos en los dientes, es conveniente que adelantes la visita al dentista.

Para prevenir caries en los dientes de leche, mucha higiene

Antes incluso de que aparezca el primer diente, debe realizarse la limpieza de las encías después de cada toma. Para ello, puedes usar una gasa humedecida. Cuando comience la dentición, recurre al cepillo; eso sí, al principio, sin pasta dentífrica hasta los 2 años. A partir de entonces, puedes ponerle una pequeña cantidad, siempre y cuando esté especialmente indicada para niños, es decir, con bajo contenido en flúor. Y recuerda: para prevenir que le salgan caries, no le dejes sólo con el biberón en la boca, pues el contacto prolongado con los azúcares de la leche predisponen a la aparición de caries.`,
      author: 'Claudia Mori Torres',
      image: 'assets/Imagenes-Inicio/Blog/img2.png',
      category: 'Odontología',
    },
    {
      id: 3,
      title: '¿Cómo es el desarrollo del lenguaje del bebé en sus primeros meses de nacido?',
      description: 'La comunicación de los bebés y sus primeras palabras.',
      detail: `Desde su nacimiento los bebés disponen apenas de los gestos, de algunos sonidos y del llanto para comunicarse y transmitir sus necesidades y emociones, a la gente de su entorno.

La comunicación de los bebés y sus primeras palabras

¿Cómo se comunican los bebés? Desde el nacimiento los niños se comunican con nosotros a través de gestos y sonidos. A través del llanto, por ejemplo, ya nos indican que hay algo que no les gusta o por el que se sienten molestos, que tienen hambre, miedo, dolor, etc. Por eso cuando hablamos de lenguaje del bebé, diferenciamos dos etapas: la etapa pre-lingüística y la lingüística.

¿Qué es y cómo se desarrolla la etapa pre-lingüística o no verbal? La etapa pre-lingüística o no verbal se llama así precisamente porque no hay palabras, lo que hay son sonidos, aproximaciones, gorjeos, balbuceos, llantos y sonrisas, que constituyen la primera etapa donde los niños ya se empiezan a comunicar, y dura más o menos hasta los doce meses. Los gestos y sonidos revelan el estado de ánimo del bebé, así como distintas necesidades: de comer, de tener contacto físico, de cambiar pañales, de dormir, beber, etc. Los bebés transmiten y se comunican siempre.

¿Qué señales nos indican que el lenguaje del bebé está evolucionando?¿Cómo vemos que evolucionan los niños? Pues, desde ese llanto inicial que es la primera manifestación sonora del niño, a esto le seguirá la aparición de la sonrisa como respuesta a lo que sí le gusta, sonidos guturales y vocálicos y, poco a poco empieza a distinguir entonaciones de los padres, es decir, si se refieren a alegría, sorpresa o enfado. En esta evaluación también aparecerá el balbuceo y  las primeras aproximaciones que de por sí apenas tiene un valor comunicativo pero que cada vez van ganando más intencionalidad y significado.  A esto le seguirá una jerga o lenguaje que los padres ya van identificando y esos sonidos son lo que al niño le va acercando a la palabra.

¿Por qué y para qué balbucean los bebés? El balbuceo no se provoca, por lo general, hasta aproximadamente los cuatro meses, aunque es verdad que los niños antes ya hacen algunos sonidos de manera activa. El balbuceo es su manera de ir entrenando los músculos faciales y los órganos fonatorios  para poder aprender a hablar y, también es una manera de acercarse a su lengua y a su entorno.  Además de ello, los adultos no sólo le van a dar información al hablar, sino que también van a interpretar sus vocalizaciones, dándoles un sentido en el contexto en el que está el niño. Con esto, podemos ver como los niños pasan de  vocalizaciones reflejas como es llanto, a juegos vocálicos, apreciaremos el balbuceo reduplicativo, cuando los niños repiten dos sílabas iguales (mamá, tatá), al que le seguirá el balbuceo no reduplicativo, cuando repiten sílabas diferentes que comienza a constituir una jerga, es decir, una manera de hablar en la que no dicen palabras pero realizan subidas y bajadas de tono que se parecen a la forma de hablar de los adultos.

¿Cómo se produce la transición entre el balbuceo y las primeras palabras del bebé? En su proceso de evolución entre el balbuceo y las primeras palabras, los niños empezarán, poco a poco, a imitar más sonidos de lo que dicen sus padres y a relacionar la información que les está dando su entorno sobre un objeto con el mismo. De esta manera, aparecerá la jerga de la que hablamos anteriormente y, en esa jerga, irán utilizando la unión de varios sonidos semejantes a una palabra para referirse a algo siempre  de la misma forma, por ejemplo, cuando dicen “aga”, para agua, algo que entiende la gente del entorno en el que está, y, finalmente, esos sonidos evolucionarán hasta la primera palabra.

¿Cómo los padres pueden interferir y ayudar a su bebé a comunicarse más? En esta etapa, es importante que los padres hablen con frecuencia con su bebé, responda a sus balbuceos y le hagan distintas expresiones con la cara. Hablar es algo que hacemos continuamente y que podemos poner en marcha en cualquier momento, por ejemplo, en las rutinas diarias. Son el mejor momento para enriquecer el mundo de nuestros hijos con información nueva, palabras, gestos, expresiones de cariño y éste, sin duda, es el mejor medio para el desarrollo y maduración de lenguaje. Entonces, podemos escoger enriquecer estas actividades, no sólo por el hecho de hablar, sino por todo lo que eso encierra, complicidad, cariño, seguridad, afectividad, aprendizaje, experiencia y emociones.`,
      author: 'Maria Rojas Rojas',
      image: 'assets/Imagenes-Inicio/Blog/img3.png',
      category: 'Pediatría',
    },
    {
      id: 4,
      title: '¿Cómo amamantar a mi bebé?',
      description: 'Algunos consejos para amamantar adecuadamente a nuestro bebé.',
      detail: `Compartimos con ustedes algunos consejos para amamantar adecuadamente a nuestro bebé. 

1. Antes de iniciar la lactancia materna, lavarse los pezones con agua limpia y comenzar a estimularlos.

2. Sostenga a su bebé sobre una lado de su cuerpo, el bebé debe estar acostado pecho a pecho o mentón a su seno, su boca debe estar frente a su seno a la misma altura del pezón.

3. Con su mano libre, guíe al bebé hacia su seno, toque su labio inferior con su pezón y así abrirá su boca.

4. Cuando su boca este bien abierta, acérquelo al seno, su bebé debe llevar la boca al pezón y parte de la aréola.

5. El bebé debe succionar cada seno por un tiempo no menor de 10 a 15 minutos haciéndole eliminar sus gases después de cada seno.

6. Si necesita remover de su seno la boca del bebé, introduzca su dedo meñique limpio, hacia la esquina de la boca para interrumpir la succión, así evitará lesionarse el pezón.`,
      author: 'Crisogono Rubio Valenzuela',
      image: 'assets/Imagenes-Inicio/Blog/img4.png',
      category: 'Pediatría',
    },    {
      id: 5,
      title: 'Qué es la salud integral y cómo afecta a nuestro bienestar',
      description: 'Desde el punto de vista de los profesionales sanitarios, la salud integral requiere un enfoque multidisciplinar que aborde sus tres componentes fundamentales: salud física, salud mental y salud social.',
      detail: `La salud integral es un concepto vinculado a la definición de salud establecida por la Organización Mundial de la Salud (OMS), que la describe como “un estado de completo bienestar físico, mental y social”. En otras palabras, se trata de una perspectiva más holística que la concepción tradicional de la medicina, que define la salud simplemente como la ausencia de enfermedad.
Desde el punto de vista de los profesionales sanitarios, la salud integral requiere un enfoque multidisciplinar que aborde sus tres componentes fundamentales: salud física, salud mental y salud social.
Este concepto se estudia en algunos de los masters de Salud y Biomédicas de la Universidad Europea, entre los que se encuentran el Máster en Salud Pública.
No obstante, no son únicamente los profesionales de la salud quienes pueden contribuir a la salud integral. Tanto las personas individuales como las instituciones tienen un papel crucial en la promoción y mantenimiento de la salud integral.

En este artículo explicamos los tres factores determinantes de la salud integral y exploramos qué se puede hacer para mejorarla. 

¿Cuáles son los componentes de la salud integral?

Como adelantamos en la introducción, existen tres factores que determinan si una persona disfruta de salud integral:

Salud física
Implica el correcto funcionamiento del organismo y la ausencia de enfermedades. Este aspecto se asemeja más al concepto tradicional de salud en la medicina.

Salud mental
Se refiere a un estado de bienestar caracterizado por la ausencia de trastornos mentales. Esto posibilita que las personas desarrollen su vida diaria, afronten situaciones de estrés y contribuyan a su comunidad. Constituye uno de los retos de la salud pública, según la preocupación de los expertos.

Salud social
Se refiere a los factores socioeconómicos que pueden afectar a la salud de las personas. Entre ellos, se incluyen aspectos como la educación, la seguridad alimentaria y financiera, así como el empoderamiento de las comunidades.

Estrategias para cuidar la salud integral a nivel personal

No siempre tenemos control sobre las enfermedades, los sucesos que afectan a nuestra salud mental o nuestro entorno socioeconómico. Sin embargo, a nivel personal, podemos desarrollar hábitos saludables que nos ayuden a cuidar los aspectos físicos y mentales de la salud integral.

Hábitos para cuidar la salud física
En el día a día, podemos prestar atención a cuatro aspectos clave que influyen en nuestro estado físico:

· Sueño: el tiempo de descanso recomendado por los expertos oscila entre las 7 a las 10 horas, dependiendo de la edad.

· Alimentación: para una dieta completa, es esencial incluir alimentos frescos y variados que brinden todos los nutrientes necesarios. Esto implica la incorporación de proteínas magras, cereales integrales, grasas saludables, así como frutas y verduras. Consultar con un experto en nutrición, que haya completado un Grado en Nutrición y Dietética a distancia, puede ofrecer orientación específica sobre cómo integrar adecuadamente estos elementos y lograr una alimentación saludable y equilibrada.

· Hidratación: para los adultos, la Autoridad Europea de Seguridad Alimentaria recomienda una ingesta de entre 2 y 2,5 litros diarios.

· Actividad física: los expertos coinciden en que entre 150 y 210 minutos de ejercicio moderado a la semana tienen un impacto positivo en la salud.

Hábitos para cuidar la salud mental

Aunque son muchos los aspectos que pueden afectar a nuestra salud mental, los que describimos a continuación son básicos para cuidar este componente de la salud integral.

· Gestión del estrés: técnicas como la meditación, el yoga o el mindfulness pueden ayudar a reducir la tensión diaria y recargar energías para enfrentarnos al día a día.

· Atención profesional: expertos cualificados, como aquellos con formación en el Máster en Psicología General Sanitaria online de la Universidad Europea, están capacitados para brindar estrategias y terapia que ayudan a prevenir y superar los problemas de salud mental.

· Vida social y comunidad: el aislamiento es una de las causas de muchos problemas de salud mental. Las relaciones cotidianas con las personas de nuestro entorno pueden ayudar a prevenirlo.

· Salud física: todos los aspectos para el cuidado de la salud física del apartado anterior tienen también un impacto positivo en la salud mental.

Estrategias para promover la salud integral desde los servicios sanitarios y sociales

La pobreza, la exclusión, los conflictos estructurales y otros factores socioeconómicos tienen un impacto innegable en la salud de las personas. Sin embargo, estos aspectos escapan muchas veces del control individual y deben abordarse desde un enfoque institucional y multidisciplinar de promoción de la salud. Estas son algunas de las áreas de intervención que pueden contribuir a mejorar la salud social de las comunidades.

· Mitigación de las desigualdades socioeconómicas
· Empoderamiento de las comunidades
· Educación para la salud
· Sensibilización
· Diversidad e inclusión
· Atención a colectivos vulnerables

En conclusión, el concepto de salud integral ofrece una perspectiva holística y compleja del bienestar humano. Incluye componentes físicos, mentales y sociales que pueden abordarse desde varios ángulos. Por un lado, las personas pueden forjar hábitos saludables para proteger su salud mental y física. Por el otro lado, las instituciones y los servicios sociales y sanitarios pueden contribuir a crear las condiciones necesarias para favorecer la salud social. El equilibrio entre estos tres elementos mejora la calidad de vida de las personas y contribuye a prevenir enfermedades, generar resiliencia y garantizar el bienestar global de la población.

A lo largo del texto, hemos visto algunos programas vinculados al concepto de la salud integral. No obstante, en la Universidad Europea tenemos una gran variedad de titulaciones en el ámbito biomédico. Entre ellas, destacan el Máster en Bioinformática, el Máster online en Gestión Sanitaria y el Máster en Gestión de Enfermería. Visita nuestra página web e infórmate.`,
      author: 'Paola Lazo Rojas',
      image: 'assets/Imagenes-Inicio/Blog/img5.png',
      category: 'Medicina y Salud',
    },    {
      id: 6,
      title: 'Implantes monofásicos en odontología',
      description: 'En este artículo te explicamos qué son los implantes monofásicos, cuáles son sus principales aplicaciones y beneficios y qué cuidados requieren tras su colocación.',
      detail: `	¿Qué es la implantología monofásica?
La implantología monofásica es un procedimiento que consiste en colocar un implante dental en una sola fase quirúrgica. Dado que el tornillo del implante y el pilar protésico constituyen una única pieza, con esta técnica no es necesario realizar una segunda intervención quirúrgica para descubrir el implante.
Gracias a esta estructura única, se reduce significativamente el tiempo de tratamiento y el número de visitas al odontólogo. Por ello, los implantes monofásicos se han convertido en una opción ideal para personas con poco tiempo o que desean evitar múltiples procedimientos invasivos.

	Aplicaciones de los implantes monofásicos
Los implantes monofásicos se han revelado como una solución muy versátil dentro de la odontología. Su diseño permite realizar rehabilitaciones orales de forma rápida y eficiente, sin comprometer la estabilidad ni la funcionalidad del implante.

Estos son algunos de los casos en los que se suele recurrir a ellos:

· Pacientes con poco tiempo disponible, que requieren una solución funcional en el menor número de citas posibles.

· Personas con limitaciones óseas leves, en quienes no se recomienda realizar injertos previos ni procedimientos más complejos.

· Tratamientos de carga inmediata, donde es posible colocar la prótesis provisional o definitiva el mismo día del implante.

· Rehabilitación de pacientes edéntulos, mediante prótesis completas fijas o removibles sobre implantes.

· Casos estéticos en zonas anteriores, donde es importante reducir el tiempo sin piezas visibles.

Para que estas aplicaciones sean efectivas, es fundamental conocer cómo se realiza la colocación del implante y cuáles son los pasos de este procedimiento.

	Procedimiento de colocación de los implantes monofásicos
Como hemos mencionado, el procedimiento es rápido y mínimamente invasivo. Por regla general, estos son los pasos que siguen los profesionales de la odontología para colocar un implante monofásico:

1. Primero se realiza una evaluación clínica y una planificación digital, es decir, se lleva a cabo un estudio personalizado de la estructura ósea y de las necesidades del paciente.

2. A continuación, se coloca el implante. Esto se realiza en una única cirugía donde se inserta el implante monofásico, sin necesidad de pasar por fases intermedias.

3. Por último, dependiendo del caso, se coloca una corona provisional o definitiva en el mismo acto quirúrgico.
Este proceso también favorece una mejor integración con el hueso, facilitando la osteointegración sin comprometer la estabilidad inicial del implante.

	Diferencias entre implantes monofásicos y bifásicos
Aunque ambos tipos buscan restaurar la funcionalidad y la estética dental, presentan diferencias clave:

· Estructura: los implantes bifásicos constan de dos partes (implante y pilar), mientras que los monofásicos son de una sola pieza.

· Tiempo de tratamiento: los bifásicos requieren dos fases quirúrgicas y un periodo de cicatrización más prolongado.
Carga inmediata: los monofásicos permiten una carga más rápida, lo cual es ideal para pacientes con necesidades funcionales urgentes.

· Adaptabilidad: los bifásicos son más versátiles en casos complejos, mientras que los monofásicos destacan en tratamientos rápidos y simples.

Ambas opciones tienen su lugar dependiendo del diagnóstico y las necesidades individuales de cada persona. La elección entre uno u otro debe basarse en una evaluación clínica detallada.

	Beneficios de los implantes monofásicos
Optar por implantes monofásicos conlleva múltiples beneficios tanto para el profesional como para el paciente:

· Menor tiempo de tratamiento y recuperación.

· Menor invasividad quirúrgica.

· Menor riesgo de complicaciones postoperatorias.

· Reducción del coste general del tratamiento.

· Facilidad de mantenimiento y limpieza.

Además, se integran eficazmente con diferentes tipos de prótesis dentales, mejorando la funcionalidad y la estética final.

	Cuidados posteriores al tratamiento
A pesar de ser una técnica menos invasiva, los cuidados postoperatorios son fundamentales para el éxito del implante. Es recomendable que los pacientes sigan estas pautas:

· Mantener una correcta higiene bucal para evitar infecciones.

· Evitar alimentos duros durante las primeras semanas.

· Asistir a las revisiones programadas.

· Seguir las indicaciones del especialista en cuanto a medicación o productos de cuidado específicos.

Una vez completado el proceso de cicatrización y adaptación, el implante puede mantenerse durante muchos años si se siguen estas recomendaciones.

La implantología monofásica no solo es una solución innovadora para los pacientes, sino también una excelente oportunidad para los profesionales que desean destacar en un sector en constante evolución. Dominar esta técnica puede marcar la diferencia en tu carrera, ya que cada vez más clínicas demandan especialistas capaces de aplicar procedimientos avanzados con un enfoque práctico y actualizado.`,
      author: 'Claudia Mori Torres',
      image: 'assets/Imagenes-Inicio/Blog/img6.png',
      category: 'Odontología',
    },    {
      id: 7,
      title: '¿Qué es la farmacogenética y cuál es su importancia?',
      description: 'Cada persona tiene una variación genética única, que puede influir en la manera en que su cuerpo procesa cada uno de los medicamentos que toma.',
      detail: `	Diferencia entre farmacogenética y farmacogenómica
Por un lado, la farmacogenética es una disciplina procedente de la biología que estudia el efecto de la variabilidad genética de una persona ante determinados fármacos.
Esta rama de la medicina tiene como objetivo principal personalizar el tratamiento de los pacientes asegurando así que los medicamentos que tomen sean efectivos y seguros para ellos.
Por otro lado, la farmacogenómica se encarga de estudiar las bases moleculares y genéticas de las diferentes enfermedades para el desarrollo de nuevos tratamientos.

	Categorías de la farmacogenética
Estas son las categorías en las que se puede clasificar la farmacogenética.

· Farmacogenética clásica: se encarga de estudiar las variaciones genéticas que influyen en la respuesta de un individuo frente a un medicamento.

· Farmacogenómica: trata de estudiar la relación que hay entre el genoma humano y los medicamentos.

· Farmacotranscriptomática: se enfoca en la expresión genética frente a los diferentes medicamentos.

· Farmaco - proteómica: se encarga de analizar la relación existente entre los medicamentos y las proteínas.

	¿Para qué sirve la farmacogenética?
La farmacogenética tiene numerosas aplicaciones algunas de ellas incluyen:

· Mejora la seguridad de los medicamentos: puede ayudar a identificar a los pacientes que tienen un riesgo mayor de padecer efectos secundarios graves debido a su a su variación genética única. Esto permite a los médicos ajustar las dosis o seleccionar algún medicamento qué puedo hacer alternativo y más seguro para su paciente.

· Optimización de tratamientos: la farmacogenética ayuda a los médicos a identificar cuáles son los medicamentos que resultan más efectivos para un paciente en particular. Lo que puede reducir el coste asociado y el tiempo con la selección de un determinado tratamiento.

· Previene enfermedades: la farmacogenética es capaz de identificar a las personas que tienen un mayor riesgo d desarrollar enfermedades crónicas. Esto puede permitir a los profesionales médicos intervenir antes en el curso de la enfermedad para poder retrasar la progresión de esta.

Es imprescindible conocer el diagnóstico molecular de una enfermedad y que la prueba farmacogenética se convierta en una prueba rutinaria para médicos y farmacéuticos, ya que así podrán seleccionar los medicamentos y dosis correspondientes a cada paciente de forma más eficiente.

	Importancia de la farmacogenéticos
La importancia de la farmacogenética se puede recoger en los siguientes puntos.

· Facilita el diseño de fármacos enfocados específicamente a una enfermedad en concreto.

· Reemplaza el clásico ensayo-error por un tratamiento que contempla el perfil genético del paciente utilizando la sustancia necesaria desde el inicio.

· Reducción de costes en sistemas de salud ya que disminuye la duración de los tratamientos, así como el número de medicaciones alternativas utilizadas.

· Desarrollos innovadores como el uso de vacunas preparadas con ADN o ARN con la intención de activar el sistema inmune, pero sin causar infecciones.

· Las salidas profesionales en farmacia son muy variadas, se puede trabajar en investigación, farmacia clínica, farmacia hospitalaria o en laboratorio entre otras muchas opciones.
`,
      author: 'Paola Lazo Rojas',
      image: 'assets/Imagenes-Inicio/Blog/img7.png',
      category: 'Laboratorio',
    },{
      id: 8,
      title: 'Diabulimia: qué es, síntomas y tratamiento de este trastorno alimentario poco conocido',
      description: 'La diabulimia es un trastorno alimentario que afecta a personas con diabetes tipo 1 y, si bien no es tan conocido como otros TCA, sus consecuencias físicas y emocionales pueden ser devastadoras.',
      detail: `En este post de blog, hablaremos sobre qué es la diabulimia, cómo reconocer sus síntomas, qué consecuencias tiene para la salud y qué se puede hacer para tratarla. Además, destacaremos la importancia de una formación especializada para aquellos profesionales que quieren aprender a manejar trastornos alimentarios tan complejos como este.

	¿Qué es la diabulimia?
La diabulimia es una combinación peligrosa de trastorno de conducta de la alimentación (TCA) y un mal manejo del tratamiento para la diabetes tipo 1. Aunque no está reconocida como un trastorno específico en el DSM-5 (el manual de diagnóstico estándar), se ha convertido en un problema serio en personas con diabetes tipo 1 que desean perder peso a toda costa.

El nombre viene de la fusión de diabetes y bulimia, pero no se trata tanto de los clásicos episodios de atracón y purga. En lugar de eso, lo que caracteriza a la diabulimia es la omisión deliberada de insulina. Esto provoca un aumento de glucosa en sangre y, por consiguiente, una pérdida de peso rápida. El problema radica en que, si bien esto puede parecer efectivo a corto plazo, pone en riesgo la vida de la persona a largo plazo.

Las personas con diabulimia suelen tener una imagen corporal distorsionada y un miedo intenso a subir de peso. Ven la insulina como una amenaza para su figura, lo que puede llevarlos a reducirla o, incluso, eliminarla por completo, con consecuencias muy graves.

	¿Cuáles son los síntomas y señales de alerta de la diabulimia?
Detectar la diabulimia no siempre es sencillo, porque muchos de sus síntomas pueden parecer parte del manejo normal de la diabetes. Sin embargo, hay algunas señales que pueden ayudar a identificar este trastorno en sus primeras fases:

· Saltarse o reducir deliberadamente las dosis de insulina.

· Pérdida de peso rápida y no explicada.

· Obsesión con el peso y la figura corporal.

· Cambios repentinos en los niveles de glucosa.

· Cansancio extremo, irritabilidad y alteraciones del ánimo.

· Evitar comer en público o aislamiento social.

· Conductas compensatorias, por ejemplo: hacer ejercicio en exceso o restringir alimentos.

· Sentimiento de culpa después de comer.

Además de los síntomas mencionados, existen otros indicios que pueden ayudar a detectar la diabulimia. Por ejemplo, es habitual encontrar discrepancias entre los valores de glucosa que la persona registra a diario y el resultado de la hemoglobina glicosilada (HbA1c), que puede estar elevada.

También pueden aparecer síntomas físicos como aliento con olor afrutado, piel seca, caída de cabello o infecciones frecuentes. Y, en algunos casos, la persona puede falsificar los registros de insulina o de glucosa para ocultar la manipulación de su tratamiento.

Si notas estos signos en alguien cercano a ti, es importante consultar a un profesional de la salud.

	¿Cuáles son las principales causas de la diabulimia?
La diabulimia surge de la interacción de varios elementos, tanto psicológicos como médicos. Entre las causas más comunes de este TCA, se encuentran:

· Presión social y cultural sobre el cuerpo: sobre todo, en adolescentes y mujeres jóvenes. El ideal de belleza puede ser abrumador y la diabetes tipo 1 puede incrementar el miedo al aumento de peso debido a la insulina.

· Baja autoestima y necesidad de control: muchas personas que sufren diabulimia tienen una relación problemática con su imagen corporal y la comida. El control de la ingesta de alimentos y la insulina se convierte en una manera de "dominar" algo en su vida.

· Factores propios de la diabetes: vivir con diabetes implica una monitorización constante de la glucosa, lo que puede llevar a obsesionarse con los carbohidratos, las dosis de insulina y el peso corporal.

· Falta de apoyo emocional: a veces, las personas con diabetes tipo 1 no reciben la orientación psicológica adecuada y esta circunstancia puede hacer que busquen formas extremas de controlar su peso.

No hay que olvidar que la presión médica para mantener un control estricto de la diabetes puede aumentar la ansiedad y la obsesión por los resultados, lo que a veces contribuye al desarrollo de la diabulimia. En algunos casos, la omisión de insulina puede convertirse en una forma de autolesión o de castigo hacia uno mismo, especialmente si la persona experimenta sentimientos de culpa o frustración relacionados con la enfermedad.

	¿Qué consecuencias físicas y psicológicas tiene la diabulimia?
Las investigaciones muestran que la diabulimia puede triplicar el riesgo de complicaciones graves asociadas a la diabetes, como el daño renal, la pérdida de visión o la neuropatía diabética. Además, se ha observado que este trastorno puede reducir de forma significativa la esperanza de vida si no se trata a tiempo, lo que refuerza la importancia de la detección y la intervención tempranas.

En el aspecto psicológico, las personas con diabulimia suelen vivir con ansiedad, depresión y sentimientos de aislamiento y culpa. El temor al juicio y la vergüenza pueden hacer que eviten pedir ayuda, lo que empeora aún más su situación.

	¿Qué tratamientos son más efectivos para la diabulimia? 
El tratamiento de la diabulimia necesita una estrategia completa que combine la atención al trastorno alimentario y el control adecuado de la diabetes. Para ello, es fundamental contar con un equipo multidisciplinar que trabaje de forma coordinada para tratar los aspectos médicos, psicológicos y nutricionales, y que la intervención se adapte a las necesidades individuales de cada paciente.

La intervención de la diabulimia debe incluir:

· Terapia cognitivo-conductual (TCC): es muy útil para ayudar a las personas a modificar los pensamientos y comportamientos dañinos relacionados con la comida, el cuerpo y el uso de la insulina.

· Tecnología de apoyo: las bombas de insulina con controles automáticos o los monitores continuos de glucosa puede ser de gran ayuda para garantizar un control adecuado y evitar la manipulación del tratamiento.

· Restablecimiento del tratamiento adecuado: es importante ayudar a la persona a entender que la insulina es esencial para su salud, tanto para controlar la diabetes como para recuperar un peso saludable.

· Reducación alimentaria y corporal: la psicoterapia tiene un papel importante para tratar los trastornos de conducta de la alimentación asociados a la diabulimia.

· Gestión emocional: el apoyo psicológico es clave para ayudar a la persona a superar los pensamientos distorsionados sobre el peso y la figura corporal.

Una formación especializada en trastornos alimentarios es crucial para tratar este tipo de casos. El Máster en Trastornos de la Conducta Alimentaria en Madrid de la Universidad Europea (también, disponible en modalidad presencial en nuestro campus de Málaga) es ideal para quienes desean formarse en la detección, diagnóstico y tratamiento de trastornos complejos como la diabulimia. Este programa ofrece una formación multidisciplinaria que prepara a los profesionales para intervenir de manera eficaz en contextos clínicos, educativos y hospitalarios.

En conclusión, la diabulimia es un trastorno grave que afecta profundamente la salud física y emocional de quienes lo padecen. Sus consecuencias pueden ser devastadoras y requieren una intervención especializada y urgente.`,
      author: 'Paola Lazo Rojas',
      image: 'assets/Imagenes-Inicio/Blog/img8.png',
      category: 'Medicina y Salud',
    },{
      id: 9,
      title: '¿Qué es el sedentarismo y cuáles son sus consecuencias para la salud?',
      description: 'La digitalización, el teletrabajo y la oferta de ocio moderna, entre otros factores, han hecho que cada vez sean más las personas que llevan una vida sedentaria.',
      detail: `	¿Qué es el sedentarismo?
De acuerdo con la Organización Mundial de la Salud (OMS), el sedentarismo es la falta de actividad física suficiente para cumplir con los niveles recomendados para la salud.

Es importante diferenciar este problema de la falta de ejercicio, ya que va mucho más allá. No hablamos solo de la ausencia de actividad física estructurada (entrenar en el gimnasio, practicar un deporte, etc.), sino de largas horas de inactividad, en las que la persona está sentada frente al ordenador, viendo la televisión o usando dispositivos móviles.

Según estudios científicos, se considera sedentarismo cuando una persona pasa más de 6-8 horas al día sin realizar actividad física moderada o intensa. Esto también incluye el tiempo que pasamos sentados en el trabajo, en el transporte o en casa.

	Factores que han favorecido el estilo de vida sedentario
Son muchos los factores que han contribuido a que nuestro estilo de vida sea mucho más inactivo. Veamos algunos de ellos:

· Digitalización del trabajo: muchas personas deben pasar varias horas frente al ordenador para cumplir con sus obligaciones laborales.

· Aumento del entretenimiento pasivo: ver series, jugar a videojuegos o navegar en redes sociales son algunas de las actividades de ocio modernas que fomentan la inactividad.

· Menos actividades físicas diarias: la automatización de muchas tareas cotidianas o el uso del coche han reducido la necesidad de caminar o hacer esfuerzos físicos.

· Cambio en hábitos sociales: la interacción social digital ha reemplazado muchas actividades al aire libre.

	Efectos del sedentarismo en la salud
El impacto del sedentarismo depende de factores como la edad y el estilo de vida, y sus causas pueden ser muy diversas. En los adultos, las largas jornadas de trabajo en oficina y las responsabilidades cotidianas reducen el tiempo disponible para realizar ejercicio. En el caso de niños y adolescentes, el uso excesivo de pantallas ha desplazado el tiempo dedicado a actividades físicas o al juego activo. Por último, en las personas mayores, las limitaciones de movilidad y el aislamiento social son aspectos que aumentan el sedentarismo.

El estilo de vida moderno ha convertido al sedentarismo en un importante problema de salud pública. Se considera uno de los principales motivos de riesgo, ya que tiene múltiples efectos negativos, entre ellos:

· Problemas cardiovasculares: el sedentarismo incrementa el riesgo de desarrollar hipertensión, infartos y accidentes cerebrovasculares debido a la falta de actividad física.

· Obesidad y diabetes: la ausencia de ejercicio ralentiza el metabolismo, favorece la acumulación de grasa corporal y aumenta la probabilidad de padecer diabetes tipo 2.

· Dolores musculoesqueléticos: la inactividad prolongada afecta la salud de los músculos, huesos y articulaciones, causando rigidez, dolor y debilitamiento.

· Deterioro cognitivo: la inactividad afecta a la memoria y al rendimiento cerebral.

· Problemas emocionales: el sedentarismo se asocia con mayores tasas de ansiedad y depresión.

	¿Cómo combatir el sedentarismo?
Reducir el impacto del sedentarismo es posible adoptando hábitos saludables en la vida diaria. Estas son algunas acciones concretas que puedes incorporar:

· Realizar pausas activas: si trabajas sentado, levántate y mueve el cuerpo durante unos minutos al menos cada hora.

· Incorporar actividad física: dedica al menos 150 minutos semanales a ejercicios moderados o 75 minutos a actividades intensas.

· Optar por alternativas activas: sube por las escaleras en lugar de usar el ascensor y, siempre que sea posible, camina en lugar de utilizar el coche.

El sedentarismo no solo afecta a las personas a nivel individual, sino que también genera un impacto significativo en el sistema sanitario. Las enfermedades crónicas relacionadas con la falta de actividad física, como las cardiovasculares y metabólicas, aumentan la demanda de atención médica y recursos sanitarios.

La medicina deportiva es una de las disciplinas que puede ayudar a combatir el sedentarismo. Estos especialistas ofrecen recomendaciones personalizadas basadas en el estado físico, el historial médico y el estilo de vida de cada paciente. Por ejemplo, para quienes han sido sedentarios durante mucho tiempo, comenzar con caminatas cortas, estiramientos suaves o ejercicios de fuerza de baja intensidad puede ser una estrategia eficaz. A medida que el cuerpo responde, se puede aumentar progresivamente la intensidad y la duración de la actividad, siempre con supervisión médica. Este enfoque individualizado mejora los resultados y asegura que los cambios se mantengan a largo plazo.`,
      author: 'Paola Lazo Rojas',
      image: 'assets/Imagenes-Inicio/Blog/img9.png',
      category: 'Medicina y Salud',
    },{
      id: 10,
      title: 'Telemedicina y salud pública: una revolución en la atención sanitaria',
      description: '¿cuál es su impacto en la salud pública? ¿Cuáles son sus ventajas y desafíos?',
      detail: `	¿Qué es la telemedicina y cómo funciona?
La telemedicina, o atención sanitaria a distancia, es una forma de prestar servicios de salud mediante el uso de tecnologías digitales como plataformas de videoconferencia, aplicaciones móviles de salud, dispositivos de monitorización remota y sistemas de historia clínica digital. Permite que pacientes y profesionales de la salud se conecten sin necesidad de estar en el mismo lugar, facilitando la atención en zonas rurales, en casos de movilidad reducida o cuando se necesita una atención rápida.

Algunas de las aplicaciones de la telemedicina más comunes son:

· Consultas virtuales: los pacientes pueden comunicarse con profesionales sanitarios (médicos, enfermeros, psicólogos, fisioterapeutas, etc.) a través de videollamada sin necesidad de desplazarse. Esto resulta especialmente útil en el seguimiento de enfermedades crónicas, consultas de salud mental y revisiones postoperatorias.

· Monitorización remota: mediante dispositivos inteligentes, como pulseras de actividad, tensiómetros o glucómetros conectados, se pueden registrar constantes vitales y enviar los datos en tiempo real a los equipos de salud. Esta tecnología es clave para el seguimiento de condiciones como la diabetes, la hipertensión o las afecciones cardiacas.

· Diagnóstico a distancia: pruebas diagnósticas como radiografías, resonancias magnéticas o electrocardiogramas pueden ser evaluadas por médicos sin estar físicamente con el paciente. Esto agiliza la toma de decisiones y permite contar con la opinión de especialistas en cualquier parte del mundo.

· Historia clínica digital: el acceso seguro y remoto a la información clínica permite perfeccionar la coordinación entre distintos niveles asistenciales. Evita duplicidades en pruebas, mejora la continuidad de los cuidados, y ayuda a ofrecer un tratamiento más personalizado y eficaz.

· La telemedicina no busca reemplazar las consultas presenciales, sino complementarlas, haciendo que la atención sanitaria sea más rápida, accesible y eficiente.

	Tipos de telemedicina
Dentro del ecosistema de la telemedicina, se pueden distinguir diferentes modalidades basadas en la forma de interacción entre los pacientes y profesionales de la salud, así como el tipo de tecnología utilizada:

· Síncrona (en tiempo real)
Este tipo de telemedicina implica una interacción directa en tiempo real entre el paciente y el profesional de la salud, generalmente, a través de videollamadas o plataformas de mensajería instantánea. Es útil en situaciones donde se necesita una evaluación rápida y directa del estado del paciente, como valoraciones clínicas, sesiones de apoyo psicológico o educación sanitaria personalizada.

· Asíncrona (diferida)
En este caso, el paciente envía información de salud, como fotos, análisis de laboratorio o síntomas detallados, y el médico responde en un momento posterior. Este enfoque mejora la eficiencia, permite organizar mejor el tiempo clínico y es muy útil en el seguimiento de casos que no requieren atención inmediata.

· Monitorización remota
Idónea para pacientes con enfermedades crónicas o necesidades de seguimiento continuo, como la diabetes o las enfermedades cardiovasculares. A través de dispositivos conectados, como monitores de presión arterial, glucómetros o electrocardiógrafos portátiles, los datos se envían automáticamente a los profesionales, quienes ajustan tratamientos de manera proactiva según los resultados obtenidos.

· Telecirugía
En este tipo de telemedicina, un cirujano especializado puede dirigir un robot para realizar procedimientos quirúrgicos a distancia, lo cual es muy útil en situaciones de emergencia o para realizar intervenciones en lugares remotos.

· Educación en salud a distancia
Además de la atención sanitaria, la telemedicina también se extiende a la educación continua de profesionales de la salud. A través de cursos online, simulaciones o talleres, se pueden impartir conocimientos y habilidades sin necesidad de desplazamientos, fomentando así el acceso a una formación constante y actualizada.

	Ventajas y desafíos de la telemedicina
La telemedicina ha traído avances importantes, pero también plantea ciertos retos que es importante tener en cuenta.

	Ventajas de la telemedicina 
· Acceso equitativo a la atención sanitaria: la telemedicina reduce barreras geográficas, sociales y físicas, facilitando el acceso a la atención para personas que viven en zonas rurales, áreas de difícil acceso o con movilidad reducida. También favorece a quienes tienen responsabilidades de cuidado o limitaciones horarias, contribuyendo a reducir desigualdades en salud.

· Mayor flexibilidad y eficiencia: permite que tanto pacientes como profesionales de la salud optimicen su tiempo, ya que se eliminan las largas esperas en consulta o los viajes innecesarios. Se eliminan desplazamientos innecesarios y tiempos de espera, se agiliza la atención y se facilita el contacto continuado.
Fomento del autocontrol en la salud: los pacientes tienen la capacidad de monitorizar su salud regularmente, desde la medición de parámetros vitales hasta el seguimiento postoperatorio, sin necesidad de asistir a múltiples visitas físicas.

· Descongestión y redistribución de recursos: al permitir que casos leves o no urgentes se gestionen a distancia, los centros médicos pueden liberar recursos y destinarlos a tratar a pacientes con necesidades más urgentes o complejas.

· Impulso a la educación preventiva y programas de salud pública: gracias a las herramientas digitales, se puede informar, educar y hacer seguimiento en campañas de vacunación, cribados poblacionales, educación en autocuidados o promoción de estilos de vida saludables. Esto refuerza el trabajo preventivo de los sistemas sanitarios y mejora el impacto de las estrategias de salud pública.

	Desafíos de la telemedicina 
· Desigualdad en el acceso tecnológico: en muchas regiones, especialmente en zonas rurales o países en desarrollo, la infraestructura de Internet o el acceso a dispositivos adecuados pueden ser limitados. Esta brecha digital puede generar exclusión y limitar el impacto de la telemedicina. 

· Riesgos en la seguridad de la información: la transmisión de datos médicos por canales digitales aumenta los riesgos de brechas de seguridad y ciberataques. La protección de la privacidad del paciente se vuelve una prioridad, lo que requiere inversiones en tecnologías de encriptación y protocolos de seguridad.

· Incapacidad para diagnosticar en algunos casos: a pesar de su capacidad para tratar muchas afecciones, la telemedicina tiene limitaciones en la evaluación física directa del paciente, lo que hace que ciertos diagnósticos requieran una consulta presencial para obtener una evaluación precisa.

· Brecha generacional y desconocimiento tecnológico: aunque la telemedicina está ganando terreno, un porcentaje de la población, especialmente los adultos mayores, no están familiarizados con las herramientas digitales. Esto puede generar desconfianza o dificultades para acceder al sistema. 

	El impacto de la telemedicina en la salud pública
La telemedicina no solo mejora el acceso individual a la atención, sino que también tiene un efecto transformador en la salud pública. Contribuye a fortalecer los sistemas sanitarios, a reducir desigualdades y a responder de forma más ágil y eficiente a las necesidades colectivas de salud, especialmente en contextos de alta demanda o vulnerabilidad.

· Gestión eficiente de recursos: gracias a la telemedicina, los servicios de salud pueden redistribuir mejor los recursos. Mientras los profesionales atienden consultas a distancia, los hospitales pueden centrarse en casos más complejos. Esto es vital en zonas con escasez de personal o en momentos de alta presión como las emergencias sanitarias.

· Mejor respuesta ante emergencias globales: durante crisis sanitarias, la telemedicina permite que los profesionales gestionen un volumen mayor de casos sin saturar los centros sanitarios. Facilita el seguimiento de personas en aislamiento, el triaje remoto y la difusión de información fiable y coordinada, como se demostró en la pandemia por COVID-19.

· Sostenibilidad y accesibilidad: al reducir la necesidad de grandes infraestructuras físicas, la telemedicina apoya la creación de sistemas de salud más sostenibles, sin sacrificar la calidad de la atención. Además, mejora el acceso a servicios de salud en zonas remotas, acercando la salud a más personas sin importar su ubicación.`,
      author: 'Claudia Mori Torres',
      image: 'assets/Imagenes-Inicio/Blog/img10.png',
      category: 'Medicina y Salud',
    },{
      id: 11,
      title: 'Qué es una dieta basal y qué alimentos incluye',
      description: 'En el ámbito hospitalario la dieta basal es el régimen alimentario básico para las personas sin patologías, por lo que es el estándar de referencia para adaptar las necesidades individuales de los pacientes.',
      detail: `	¿Qué es la dieta basal?
La dieta basal es un tipo de alimentación equilibrada diseñada para cubrir las necesidades nutricionales básicas de una persona que no presenta condiciones médicas específicas.

Se utiliza, principalmente, en entornos hospitalarios o sanitarios como una pauta estándar para aquellos pacientes que pueden alimentarse de forma normal y no tienen restricciones dietéticas impuestas por su estado de salud. Al contrario que las pautas recomendadas en dietoterapia, cuyo objetivo es tratar o corregir algunas afecciones mediante modificaciones en los hábitos alimentarios, la dieta basal busca simplemente garantizar la correcta ingesta de nutrientes.

	Usos de la dieta basal
La dieta basal elaborada por el nutricionista del hospital tiene distintas aplicaciones:

· Evaluación inicial del estado nutricional: se contrasta con la dieta habitual para identificar posibles déficits o excesos nutricionales.

· Recuperación postoperatoria: en pacientes sin complicaciones, se puede utilizar para restablecer un régimen alimentario normal.

· Base para dietas terapéuticas: a partir de ella, los profesionales adaptan las pautas según patologías específicas, como la diabetes o las enfermedades renales.

· Mantenimiento de la salud general: en aquellos pacientes ingresados que no presentan condiciones médicas que afecten su alimentación.

El papel del nutricionista de hospital es clave en este proceso, ya que se encarga de ajustar la dieta basal según las necesidades individuales, garantizando que cada paciente reciba los nutrientes adecuados.

	Tipos de dieta basal u hospitalaria
Aunque se considera que la dieta basal es una dieta neutra, dentro del ámbito hospitalario se utilizan algunas variantes según la situación del paciente:

· Dieta basal estándar: contiene carbohidratos complejos, proteínas, grasas saludables, vitaminas y minerales, sin restricciones específicas.

· Dieta basal modificada: se ajusta para adaptarse a necesidades particulares, como reducir el sodio o aumentar el aporte proteico.

· Dieta basal progresiva: indicada tras intervenciones quirúrgicas, empieza con líquidos claros y progresa hasta una alimentación sólida.

· Dieta basal pediátrica: elaborada por un nutricionista infantil y adaptada a las necesidades específicas de niños y adolescentes.`,
      author: 'Paola Lazo Rojas',
      image: 'assets/Imagenes-Inicio/Blog/img11.png',
      category: 'Medicina y Salud',
    },{
      id: 12,
      title: 'Enfermedades de la boca: ¿cuáles son las más frecuentes?',
      description: 'La salud bucodental es esencial para el bienestar general, ya que la boca no solo cumple una función en la alimentación, sino que también influye en la comunicación y la autoestima. Sin embargo...',
      detail: `	Enfermedades de la boca más frecuentes
Existen muchos tipos de patologías bucodentales, pero a continuación recogemos algunas de las más extendidas entre la población:

	Caries dental
Es una de las enfermedades bucales más frecuentes del mundo. Ocurre cuando los ácidos producidos por algunas bacterias desmineralizan el esmalte dental, lo que causa cavidades. Sin el tratamiento adecuado, puede derivar en infecciones graves.

	Enfermedad periodontal
Engloba gingivitis y periodontitis. La gingivitis es la inflamación de las encías causada por placa bacteriana, mientras que la periodontitis afecta los tejidos de soporte del diente y puede provocar su pérdida.

	Candidiasis oral
Es una infección por hongos del género Candida, que afecta principalmente a personas inmunodeprimidas o con prótesis mal ajustadas.

	Halitosis
El mal aliento puede deberse a la presencia de bacterias en la lengua, a problemas digestivos o a enfermedades periodontales.

	Cáncer oral
Aunque es menos frecuente, es una de las enfermedades bucales más graves. El consumo de tabaco y alcohol son factores de riesgo clave que pueden aumentar las posibilidades de desarrollarla.

Prevención y hábitos para una buena salud bucodental
La prevención es la mejor estrategia para evitar enfermedades bucodentales.

· Cepillado dental adecuado: es fundamental cepillarse los dientes al menos dos veces al día, preferiblemente después de cada comida, utilizando una pasta dental con flúor para fortalecer el esmalte y prevenir la caries.

· Uso de hilo dental: el uso diario de hilo dental complementa la limpieza, pues alcanza zonas de difícil acceso y reduce el riesgo de caries interdentales y enfermedades de las encías.

· Visitas regulares al dentista: es recomendable acudir al dentista para realizar revisiones preventivas y limpiezas profesionales. En muchos casos, el higienista bucodental es el encargado de realizar estas limpiezas y otras tareas. Estas visitas permiten detectar a tiempo problemas antes de que se agraven.

· Dieta equilibrada: es importante reducir el consumo de azúcares y alimentos ultraprocesados, ya que fomentan el crecimiento de bacterias que causan caries. A su vez, una dieta rica en frutas, verduras y lácteos proporciona vitaminas y minerales esenciales para fortalecer dientes y encías.

· Evitar el tabaco y el alcohol: como hemos mencionado, ambos hábitos están estrechamente relacionados con diversas afecciones orales. El tabaco reduce la circulación sanguínea en las encías, favoreciendo la inflamación y la pérdida de piezas dentales. Por su parte, el alcohol puede aumentar la sequedad bucal y potenciar el desarrollo de infecciones.`,
      author: 'Claudia Mori Torres',
      image: 'assets/Imagenes-Inicio/Blog/img12.png',
      category: 'Odontología',
    },{
      id: 13,
      title: 'Vendaje funcional y sus aplicaciones en el deporte',
      description: 'El vendaje funcional es una técnica de inmovilización parcial que permite mover una articulación o un grupo muscular mientras las estructuras lesionadas permanecen protegidas.',
      detail: `	¿Qué es el vendaje funcional?
El vendaje funcional es una práctica esencial en fisioterapia deportiva, que se utiliza para prevenir lesiones, reducir el dolor y mejorar el rendimiento de los deportistas. Permite estabilizar los músculos y articulaciones sin restringir por completo el movimiento, lo que resulta especialmente útil en la recuperación de esguinces, tendinitis y otras afecciones comunes en deportes de alto impacto y deportes de alto rendimiento.

Además del vendaje funcional, técnicas complementarias como el vendaje neuromuscular han cobrado relevancia en el ámbito deportivo, ayudando a mejorar la circulación, reducir la inflamación y optimizar la recuperación muscular.

	Diferencias entre vendaje funcional y kinesiotape
Aunque a menudo se confunden, el vendaje funcional y el kinesiotaping son técnicas distintas con objetivos y aplicaciones diferentes. Son complementarias, pero es importante elegir la más adecuada según la lesión y las necesidades del paciente. Veamos en qué se distinguen:

· Finalidad: el vendaje funcional tiene un enfoque más mecánico y restrictivo, diseñado para limitar movimientos específicos y proteger articulaciones. En cambio, el kinesiotape busca estimular la circulación y aliviar tensiones musculares mediante una aplicación más elástica.

· Material: el vendaje funcional utiliza esparadrapo no elástico o semielástico, mientras que el kinesiotape emplea una cinta elástica adhesiva que imita la elasticidad de la piel.

· Aplicación: el vendaje funcional es común para tratar lesiones deportivas agudas y para la prevención, mientras que el kinesiotaping se usa más en procesos de rehabilitación y recuperación muscular.

	¿Cuándo se realiza el vendaje funcional?
Esta técnica permite a los profesionales adaptar el soporte y la estabilidad a las necesidades específicas de cada paciente, optimizando así los resultados terapéuticos. Se aplica en diversas situaciones dentro del deporte y la fisioterapia. Entre sus principales usos destacan:

· Prevención de lesiones: se recurre a menudo al vendaje funcional en deportes de alto impacto como el fútbol o el baloncesto para evitar esguinces o luxaciones.

· Tratamiento de lesiones agudas: tras una torcedura o sobrecarga muscular, ayuda a estabilizar la zona afectada sin restringir completamente la movilidad.

· Recuperación postlesión: facilita el retorno progresivo a la actividad deportiva sin aumentar el riesgo de recaída.

· Corrección postural: en algunos casos, se utiliza para mejorar la biomecánica del deportista y corregir compensaciones musculares.

	Beneficios del vendaje funcional
La versatilidad del vendaje funcional tiene numerosas ventajas para los atletas y su rendimiento. Es una herramienta clave para deportistas de diferentes disciplinas, pues ofrece la combinación perfecta de estabilidad y movilidad. Entre sus principales beneficios destacan:

· Reducción del dolor: al estabilizar la zona afectada, disminuye la sensación de molestia y permite al deportista seguir con su actividad de manera controlada.

· Prevención de recaídas: evita movimientos bruscos que puedan agravar una lesión existente.

· Mejora del rendimiento: al proporcionar soporte muscular y articular, optimiza la ejecución de los movimientos sin comprometer la movilidad.

· Rápida aplicación y ajuste: se puede modificar según las necesidades del deportista y la evolución de la lesión.

· Complemento de otros tratamientos: se combina con terapia manual, ejercicios de rehabilitación y técnicas como el vendaje neuromuscular.`,
      author: 'Crisogono Rubio Valenzuela',
      image: 'assets/Imagenes-Inicio/Blog/img13.png',
      category: 'Medicina Deportiva',
    },{
      id: 14,
      title: 'Enfermedades del oído: prevención y cuidado',
      description: 'La salud auditiva es fundamental para nuestra calidad de vida, pero a menudo no le prestamos la atención que merece.',
      detail: `Enfermedades del oído más comunes
El oído puede verse afectado por diversas patologías que alteran la audición y el equilibrio. Algunas enfermedades son más comunes que otras, y conocer sus síntomas es clave para un diagnóstico y tratamiento oportunos. Las más frecuentes son las siguientes:

· Otitis: es la infección del oído medio o externo, común en niños y adultos expuestos al agua contaminada.

· Pérdida auditiva: puede ser neurosensorial, conductiva o mixta, y puede deberse al envejecimiento, a la exposición al ruido o a infecciones.

· Tinnitus o acúfenos: es la percepción de pitidos o zumbidos sin una fuente externa de sonido.

· Vértigo y enfermedad de Ménière: son trastornos del oído interno que afectan el equilibrio y pueden causar episodios de mareo severo.

· Perforación timpánica: se trata de un desgarro en el tímpano, generalmente causado por infecciones o traumatismos.

	¿Cuándo acudir a un especialista en enfermedades del oído?
Existen ciertas señales que alertan de una posible enfermedad auditiva. Consultar a un especialista en enfermedades del oído es fundamental cuando se presentan síntomas como:

· Pérdida de audición repentina o progresiva.

· Dolor persistente o sensación de presión en el oído.

· Mareos, pérdida del equilibrio o episodios de vértigo.

· Zumbidos o ruidos molestos sin causa aparente.

· Secreciones o sangrado del oído.

Una evaluación temprana puede prevenir complicaciones y mejorar significativamente la calidad de vida del paciente.

	Prevención y cuidado de la salud auditiva
Adoptar hábitos saludables y tomar medidas preventivas puede reducir significativamente el riesgo de desarrollar enfermedades del oído. Para una buena salud auditiva, se deben seguir estos consejos:

· Evitar la exposición prolongada a ruidos fuertes, utilizando protección auditiva en ambientes ruidosos y reduciendo el volumen de dispositivos electrónicos como auriculares y altavoces.

· Mantener una higiene adecuada del oído, evitando el uso de bastoncillos y optando por limpiezas seguras recomendadas por especialistas.

· Realizar revisiones auditivas periódicas, especialmente si se presentan síntomas de pérdida auditiva o infecciones recurrentes. Un chequeo temprano puede prevenir daños permanentes.

· Cuidar la alimentación, ya que un déficit de vitaminas como la B12 pueden afectar a la audición.

Tratar a tiempo infecciones respiratorias para prevenir la otitis y otras complicaciones, pues muchas afecciones del oído están relacionadas con resfriados o alergias no tratadas.`,
      author: 'Crisogono Rubio Valenzuela',
      image: 'assets/Imagenes-Inicio/Blog/img14.png',
      category: 'Otorrinolaringólogia',
    },{
      id: 15,
      title: 'Implantología y tipos de implantes dentales',
      description: 'La implantología dental es una disciplina de la odontología que se dedica a reemplazar piezas dentales perdidas a través de la colocación de implantes dentales mediante cirugía en la mandíbula o maxilar.',
      detail: `	¿Qué es un implante dental?
Un implante dental se trata de un aparato artificial diseñado para reemplazar las piezas dentales perdidas restaurando su función para masticar a la vez de ser un tratamiento de estética dental. Estas estructuras hacen de la raíz del diente perdido y van atornilladas al hueso maxilar. Las prótesis se crean a medida de cada paciente de manera que sean cómodas, naturales y generen una función dental normal.

A continuación, indicamos las principales características de un implante dental.

· Biocompatibles: el implante debe ser compatible con el cuerpo humano.

· Integración ósea: debe proporcionar estabilidad a largo plazo, ya que el implante debe integrarse de forma eficaz y sólida con el hueso circundante.

· Durabilidad: implantes duros y de carácter duradero para llevar a cabo las funciones normales.

· Diseño: realizar un diseño adecuado que se adapte a la restauración programada.

	Tipos de implantes dentales
Los implantes dentales pueden ser de diferentes materiales como titanio u otros que resulten biocompatibles que no generen rechazo por parte del sistema inmunológico. A continuación, indicamos los tipos de implantes que existen.

· Implantes endoóseos: se colocan en el hueso maxilar o mandibular, dentro de este tipo de implante se encuentran los cilíndricos, atornillados y laminados.

· Implantes subperiósticos: se colocan sobre el hueso, pero debajo de la encía. En este caso la pieza dental contiene unos pilares donde se ancla la prótesis. Este tipo se aplica a pacientes que no pueden usar dentaduras y tienen una altura ósea mínima.

· Implantes transóseos: utilizados donde el hueso es muy delgado o insuficiente para soportar implantes. Son menos comunes que el resto.

· Implantes zigomáticos: se realizan cuando el paciente tiene una pérdida grave ósea en la zona maxilar y se anclan al hueso zigomático (huesos que forman parte del pómulo).

· Mini implantes dentales: se trata de implantes más pequeños que los estándares y se utilizan cuando el espacio dental es reducido.

· Implantes basales: implantes injertados en el hueso basal (hueso compacto ubicado en mandíbula y maxilar).

	Tipos de implantes dentales sin tornillos
Los implantes dentales sin tornillos son conocidos como implantes subperiósticos y se caracterizan por colocarse bajo la encía y sobre el hueso maxilar en aquellos pacientes que tengan una densidad ósea baja.

Se suelen implementar en los siguientes casos:

· Pacientes con pérdida ósea severa.

· Pacientes con reabsorción ósea extrema.

· Pacientes con un maxilar superior muy delgado.

· Pacientes con gingivitis p enfermedad periodontal.`,
      author: 'Claudia Mori Torres',
      image: 'assets/Imagenes-Inicio/Blog/img15.png',
      category: 'Odontología',
    },{
      id: 16,
      title: 'Diastema dental: causas, diagnóstico y tratamientos',
      description: 'El diastema dental es la separación que ocurre entre dos dientes. Puede presentarse en cualquier parte de la dentadura y a cualquier edad, y su origen puede ser hereditario o adquirido.',
      detail: ` ¿Qué es un diastema dental?
El diastema dental se define como el espacio visible entre dos dientes. Aunque suele ser más común entre los incisivos superiores (las paletas), puede aparecer en cualquier parte de la dentadura. Este rasgo puede ser completamente normal en ciertas etapas del desarrollo infantil, como durante el cambio de los dientes de leche, pero si persiste en la vida adulta, podría requerir tratamiento.

Desde el punto de vista estético, algunas personas lo consideran un rasgo distintivo y atractivo, mientras que otras prefieren corregirlo por razones de apariencia o funcionalidad.

Diagnóstico del diastema
En el diagnóstico del diastema dental se combina una evaluación clínica detallada con pruebas complementarias, como radiografías. Durante la consulta odontológica, el profesional examina:

El tamaño de los dientes en relación con el espacio disponible en la arcada dental.
La alineación de la mordida, ya que los desajustes pueden influir en la formación de espacios.
Hábitos o condiciones médicas subyacentes, como frenillos labiales prominentes o enfermedades periodontales.
Un diagnóstico temprano es esencial, especialmente en casos donde el diastema puede derivar en problemas de salud bucodental.

Causas del diastema dental
Las razones por las que aparece un diastema pueden ser muy diversas. Entre las principales causas encontramos:

Genética: algunas personas heredan dientes más pequeños o discrepancias entre el tamaño de los dientes y el maxilar.
Frenillo labial: un frenillo labial superior más grande o bajo puede impedir que los dientes frontales se junten.
Hábitos en la infancia: chuparse el dedo, usar el chupete prolongadamente o empujar los dientes con la lengua son factores que contribuyen a la aparición del diastema.
Enfermedad periodontal: la pérdida de hueso o encía causada por esta enfermedad puede generar espacios entre los dientes.
Pérdida dental: cuando falta una pieza dental, los dientes adyacentes pueden desplazarse y crear espacios visibles.
Tratamientos para el diastema dental
La corrección del diastema varía según la causa y las necesidades del paciente. Entre las opciones de tratamiento más comunes, encontramos las siguientes:

Ortodoncia
La ortodoncia es una solución eficaz para corregir el diastema, especialmente si este está acompañado de otros problemas de alineación dental. Los brackets tradicionales, alineadores invisibles y otros dispositivos pueden cerrar el espacio gradualmente.

Carillas dentales
Para quienes buscan una solución estética rápida, las carillas dentales de porcelana o composite son una excelente opción. Este procedimiento no corrige la causa subyacente, pero ofrece resultados inmediatos.

Frenectomía
En casos donde un frenillo labial prominente causa el diastema, una frenectomía (procedimiento quirúrgico para recortar el frenillo) es una solución efectiva.

Tratamiento periodontal
Si el diastema se asocia a la enfermedad periodontal, es esencial abordar la causa subyacente antes de cualquier tratamiento estético u ortodóntico.

¿Existen riesgos asociados con el diastema?
Aunque el diastema no siempre supone un problema médico, existen casos donde puede influir negativamente:

Impacto en la mordida: los espacios pueden alterar la forma en que los dientes se encuentran al morder y causar molestias.
Mayor acumulación de placa: las separaciones pueden dificultar la limpieza dental, aumentando el riesgo de caries y enfermedades de las encías.
Impacto psicológico: en algunas personas, el diastema puede generar inseguridad respecto a su sonrisa.
Como hemos visto, aunque no se trata de un problema grave, el diastema dental puede causar dificultades estéticas o funcionales que merecen atención profesional. Con tratamientos que van desde la ortodoncia hasta los procedimientos quirúrgicos, existe una solución para cada caso, aunque es imprescindible que estas se lleven a cabo por profesionales.`,
      author: 'Claudia Mori Torres',
      image: 'assets/Imagenes-Inicio/Blog/img16.png',
      category: 'Odontología',
    },{
      id: 17,
      title: 'Trastorno de aprendizaje no verbal',
      description: 'El trastorno de aprendizaje no verbal, también conocido como TANV, es una dolencia que impide que los niños reconozcan e interpreten correctamente expresiones no verbales.',
      detail: `¿Qué es TANV?
Desde el ámbito sanitario se define TANV como una alteración del neurodesarrollo vinculado a diversas dificultades visoespaciales, entre las que destaca especialmente la cognición social y pragmática del lenguaje verbal.

Lo más destacado de este desorden es la incapacidad de entender expresiones faciales y el lenguaje corporal. Sin esta información adicional, los niños suelen tener dificultades a la hora de interpretar correctamente las conversaciones y las interacciones en el espacio real. Así, el TANV no afecta al uso de las palabras o a la formulación de frases, pero sí puede llegar a obstaculizar la interactividad.

Además, el trastorno de aprendizaje no verbal suele tener implicaciones en los siguientes ámbitos: 

Desarrollo emocional del niño.
Funciones ejecutivas (ordenar, guiar o planificar, entre otras).
Motricidad.
Síntomas del trastorno de aprendizaje no verbal
Si estás interesado en estudiar Psicología infantil, aprenderás cuáles son señales que se podrían asociar a un escenario de TANV. Si se identifican varios de estos síntomas en el niño, es recomendable buscar ayuda profesional y que un psicólogo especializado evalúe sus competencias.

Cualquier profesional que se haya planteado cómo ser psicólogo y haya profundizado en las características del trastorno de aprendizaje no verbal en los niños buscará los siguientes síntomas:

Dificultades a la hora de captar e interpretar gestos faciales, señas, movimientos con las manos u otras herramientas del lenguaje no verbal.
Imposibilidad de comprender el tono sarcástico o de reconocer las emociones implícitas en un diálogo.
Dificultad para procesar información visual, relaciones espaciales y distancias.
Descoordinación y torpeza a la hora de moverse.
Tendencia a intervenir mucho en las conversaciones y a hablar más que otros niños de la misma edad con una verborrea extensa y repetitiva.
Problemas para comprender conceptos matemáticos, organizarse o planificar cualquier cosa.
Incapacidad de dividir cualquier situación o trabajo en pasos más pequeños para abordarlo de una manera más sencilla.
No poder trabajar con el sentido del tiempo.
Diagnóstico de un trastorno de aprendizaje no verbal
La diagnosis del trastorno de aprendizaje no verbal es compleja. En primer lugar, porque no hay un acuerdo científico sobre la dolencia. Para muchos profesionales de la pedagogía y la psicología infantil, este no es un trastorno formal, sino que suele estar vinculado a otras situaciones como el TDAH o el espectro autista.

Además de esto, el TANV no se presenta de un modo único: suele variar mucho de un niño a otro, por lo que su abordaje requiere de un trabajo personalizado por parte de los especialistas.

Para realizar el diagnóstico de TANV, los psicólogos se centran en los patrones que el paciente no puede interpretar correctamente. Esto se pone en contraste con la inteligencia verbal del niño para valorar si hay una descoordinación respecto a la no verbal. Si es así, se confirma el pronóstico y se plantea un tratamiento.

¿Qué profesional diagnostica y trata un trastorno de aprendizaje no verbal?
Psicólogos especializados en aprendizaje infantil y pedagogos son los responsables de acompañar a los niños con TANV en su trabajo para mejorar su situación.

Estos profesionales se encargan de tratar con los afectados desde la identificación del problema hasta que consiguen las estrategias necesarias para desenvolverse con normalidad en su día a día. Por supuesto, son una pieza clave en el diagnóstico y en el proceso de tratamiento.`,
      author: 'Maria Rojas Rojas',
      image: 'assets/Imagenes-Inicio/Blog/img17.png',
      category: 'Pediatría',
    },{
      id: 18,
      title: 'Lesiones de rodilla: tipos, síntomas y causas',
      description: 'La articulación de la rodilla es una de las más complejas del cuerpo humano, ya que soportan gran parte del peso de una persona y está implicada en todos los movimientos realizados a diario como caminar, saltar, correr o realizar ciertos ejercicios como subir o bajar escaleras entre otros.',
      detail: ` Tipos de lesiones de rodilla
A continuación, indicamos las principales lesiones de rodillas que se causan tanto en deportes de alto rendimiento, principiantes o personas que no realicen ejercicio diariamente.

Esguince de rodilla: uno o varios ligamentos se pueden desgarrar o romper a causa de alguna torcedura o tirón mientras se practica ejercicio.
Desgarro: sucede cuando un tendón o músculo se estira demasiado.
Lesión en menisco: se siente hinchazón, rigidez, mucho dolor y pérdida de la movilidad al romperse, ya que el menisco es un disco con forma de medialuna que sirve como amortiguador para la rodilla.
Bursitis de rodilla: en este caso, son lesiones que afectan a las bolsas sinoviales. Éstas se encargan de amortiguar la zona externa de la articulación y están rellenas de líquido.
Uso excesivo de rodilla: es una de las lesiones más comunes del runner, es una lesión de rodilla por desgaste.
Lesión en ligamentos: es frecuente en deportes de equipo y otros donde se realizan cambios de ritmo y dirección. Este tipo de lesión implica dolor intenso, inflamación y bloqueo en la articulación. En este tipo de lesión existen tres variantes: de primer grado (esguince sin desgarro), de segundo grado (esguince con desgarro parcial), y de tercer grado (esguince con desgarro total del ligamento).
Otras lesiones de rodilla comunes
Existen otras lesiones de rodilla que se clasifican según sean o afecten a parte artrítica o mecánica.

Lesiones rodilla tipo artrítico

Artrosis: aparece por el desgaste del cartílago de la rodilla debido al uso y el paso del tiempo, afectando sobre todo a la articulación de la rodilla.
Gota: se produce cuando se originan cristales de ácido úrico en la rodilla.
Artritis reumatoide: es una enfermedad autoinmune que afecta a cualquier articulación del cuerpo.
Lesiones rodilla tipo mecánico

Dislocación: ocurre cuando el hueso de la rodilla se desplaza hacia el exterior.
Cuerpo suelto: afecta a la articulación y movilidad de la rodilla ya que se trata de un cuerpo suelto en el interior, ya sea un trozo de hueso o cartílago.
Dolor en articulaciones: cuando se padecen dolores o problemas en otras articulaciones como cadera o tobillos, se tiende a forzar la rodilla con lo que se modifica la forma de andar entre otras y se ejerce demasiada fuerza en la rodilla, como resultado se siente dolor y presión.
Síntomas y causas de lesiones de rodilla
Los síntomas relacionados con las lesiones de rodilla son muy similares, se puede clasificar principalmente los siguientes.

Dolor de rodilla (en mayor o menor grado).
Inflamación de la rodilla por acumulación de líquido.
Inestabilidad en la rodilla.
Sensación de que se rompe algo dentro al producirse la lesión.
Perdida de apoyo total o parcial en la pierna al intentar cargar el peso del cuerpo.
Las causas por las que se pueden sufrir lesiones de rodilla son muy variadas. A continuación, indicamos las más frecuentes.

Recibir un impacto en la rodilla por un golpe o caída del individuo.
Realizar algún deporte que implique saltar, correr, parar o cambiar de dirección puede producir lesiones musculares y de rodilla entre otras.
Padecer sobrepeso o alguna enfermedad de tipo artrítica.
Bajar unas escaleras, apoyar mal la rodilla al caminar, etc. Son acciones de la vida cotidiana donde se pueden sufrir lesiones sin necesidad de recibir golpe alguno.
Diagnóstico y tratamientos en las lesiones de rodilla
Para diagnosticar lo que le ocurre al paciente y dar un tratamiento acorde a la dolencia, el médico realizará una supervisión de la zona algunas o todas las siguientes comprobaciones.

Una inspección de la rodilla para verificar hinchazón, dolor, hematomas u otros síntomas.
Comprobará movilidad de la rodilla (total, parcial o leve).
Estirará y empujará la rodilla para evaluar la estructura de esta.
Se podrán hacer pruebas de diagnóstico como:

Radiografías: ayuda a detectar las posibles rupturas de hueso.
Tomografía computarizada: combinación de radiografías tomadas desde diferentes vistas para diagnosticar problemas óseos y pequeñas fisuras.
Ecografía: produce imágenes del tejido blando tanto del interior como alrededor de la rodilla.
Resonancia magnética: se utilizan ondas de radio y un campo magnético para reproducir imágenes en 3D del interior de la rodilla.
Laboratorio: en casos donde hay infección o inflamación se pueden realizar análisis de sangre o extracción del líquido interior de la articulación para analizar.
Los tratamientos que se indican una vez realizada la exploración y el diagnóstico pueden ser:

Medicamentos: antinflamatorios y o relajantes para el dolor.
Terapia: se trata de fisioterapia o ejercicios específicos para fortalecer la zona afectada y prevenir lesiones futuras.
Inyecciones: pueden ser corticoides para aliviar dolores o artritis, de ácido hialurónico para mejorar la movilidad o PRP- Plasma enriquecido en plaquetas que favorece la cicatrización.
Cirugía: no suele ser necesario una operación inmediata y se pueden valorar entre distintas opciones como cirugía artroscópica (extracción de cuerpos), cirugía de reemplazo parcial de la rodilla, reemplazo total de la rodilla u osteotomía (implica la extracción del fémur o tibia para una alineación mejor de la rodilla).`,
      author: 'Maria Rojas Rojas',
      image: 'assets/Imagenes-Inicio/Blog/img18.png',
      category: 'Medicina y Salud',
    },{
      id: 19,
      title: 'Carillas dentales: ¿Para qué sirven?',
      description: 'Las carillas dentales son finas láminas que se adhieren a la parte frontal de la dentadura con el fin de mejorar la estética dental. Son una solución rápida para la mejora de la sonrisa de los pacientes.',
      detail: ` Carillas dentales: ¿Qué son?
Las carillas dentales son un tratamiento de estética dental conocidas también conocidas como carillas estéticas. Se trata de una fina y pequeña lámina de porcelana u otros materiales que se adhieren a la parte frontal de los dientes para tapar problemas estéticos proporcionando color, brillo y forma a la dentadura de cada paciente.

Tipos de carillas detales
A continuación, indicamos los tipos de carrillas dentales principales y otras alternativas.

Carillas dentales de porcelana o cerámica: se trata de delgadas láminas de 0,5mm que se sitúan en la parte externa del diente y se fabrican de este material, porcelana. Una de sus características principales es la resistencia y durabilidad del material además de ser personalizables a cada paciente y tener un resultado muy natural.
Carillas dentales de composite: son fabricadas a partir de una mezcla de resina sintética y cerámica. Son utilizados sobre todo en empastes y rellenos, ofreciendo una gran resistencia. Este tipo de carilla dental tiene una preparación de la pieza dental antes de ser colocado y si se daña debe ser cambiado para mantener la estética dental.
Carillas dentales tipo lente de contacto: esta carilla dental se fabrica con cerámica y vidrio de silicato de litio y tienen un grosor de 0,3mm. Se coloca de forma adhesiva permitiendo ser colocada sin tener que realizar ninguna preparación o desgaste de la pieza dental.
Carillas dentales de zirconio: son fabricadas a partir de este material, el zirconio. Son carillas con gran duración y resistencia a la coloración dental. Sin embargo, no ofrecen las cualidades estéticas que las carillas mencionadas anteriormente ni la misma adherencia.
¿Para qué sirven las carillas dentales?
Estas son algunas de las soluciones que ofrece el uso de las carillas dentales en los pacientes.

Corrección de piezas dentales: las carillas ayudan a restaurar la forma y función de los dientes debido al paso del tiempo de estos, ya que sufren desgastes o fracturas.
Cierre de diastemas y espacios: dan una sonrisa más alineada tapando los espacios que quedan entre pieza y pieza dental.
Coloración de piezas dentales: algunos dientes ofrecen resistencia al blanqueamiento dental, por lo que la carilla da una solución para cubrir esas piezas con una capa blanca, brillante y resistente.
Alineación: ayudan a corregir leves problemas de alineación o la forma irregular de algún diente.
Dientes con malformaciones o irregulares: se trata de equilibrar dientes con una forma poco estética o piezas dentales cortas para lograr una armonía dental.`,
      author: 'Claudia Mori Torres',
      image: 'assets/Imagenes-Inicio/Blog/img19.png',
      category: 'Odontología',
    },{
      id: 20,
      title: 'Síndrome de Hikikomori en la adolescencia',
      description: 'El síndrome de Hikikomori es un problema que afecta a los adolescentes que deciden recluirse en sus casas.',
      detail: `Origen del término Hikikomori
“Hikikomori” (“apartarse” o “reclusión” en castellano) es un término que se origina en el año 1998, cuando el psicólogo japonés Tamaki Saito publica su libro Aislamiento social: una interminable adolescencia. En él, se refería al casi medio millón de japoneses (la mayoría de ellos hombres) que vivían recluidos en sus casas, durante al menos seis meses, dedicándose a trabajar, estudiar o jugar a videojuegos.

Hoy en día, el uso desmedido de la tecnología y el aumento del sentimiento de aislamiento ha hecho que el término se extienda por todo el planeta. En la actualidad, entendemos por “Hikikomori” el síndrome en sí y también a las personas que lo padecen.

Causas que desencadenan el síndrome de Hikikomori
Dependiendo del enfoque, podemos encontrarnos varias causas capaces de desencadenar este síndrome que se estudian en la carrera de psicología infantil:

Factores familiares
Una de las causas más habituales es la presión que los padres ejercen para que sus hijos alcancen las metas que ellos no pudieron lograr a su edad.

Esto somete a los más jóvenes a un estrés constante y en una enorme frustración, ansiedad o angustia por conseguir aquello que sus padres desean de ellos.

Estas sensaciones provocan que numerosos adolescentes y jóvenes intenten aislarse por completo para mitigar las responsabilidades que perciben en sus vidas.

Factores sociales
La presión familiar se suma a la exigencia de cumplir con determinados ideales asociados a la felicidad impuestos por la sociedad. El no alcanzarlos puede desencadenar sentimientos de tristeza, angustia e incertidumbre. Por eso, estos factores sociales pueden contribuir al desarrollo del síndrome de Hikikomori, llevando a ciertas personas a experimentar la sensación de no encajar en los grupos que comparten las creencias predominantes de la sociedad. La respuesta de estas personas ante tales circunstancias suele ser recluirse en sus hogares.

Factores económicos
Otra causa adicional es la precariedad laboral a la que muchos jóvenes se ven sometidos, resultando en una pérdida de confianza en sus habilidades. Los sentimientos de frustración frente a esta situación son comunes entre aquellos que enfrentan estas dificultades, provocando alteraciones en su estado de ánimo y consecuencias que pueden fácilmente asociarse a la exclusión social.

Síntomas del síndrome de Hikikomori
Los síntomas que experimentan las personas afectadas por el síndrome de Hikikomori se presentan de manera progresiva y, a medida que el problema avanza, se intensifican o se vuelven más notorios. Estos pueden incluir:

Aislarse o confinarse de forma voluntaria.
Recluirse en una habitación o área específica de la casa.
No participar en actividades que impliquen interactuar con otras personas cara a cara.
Dormir durante el día.
Ignorar el cuidado de la salud y la higiene personal.
Depender de las redes sociales u otros medios digitales como sustituto de la vida social.
Manifestar dificultades a la hora de expresarse verbalmente.
Responder de manera exagerada o, incluso, con agresividad cuando se les cuestiona.
Tratamiento contra el síndrome de Hikikomori
Para que un tratamiento destinado a combatir el síndrome de Hikikomori sea efectivo, entre las funciones del psicólogo infantil que lo trata se integran los siguientes aspectos:

Terapia psicológica: a través de ella, se intenta dar con las causas que han generado el problema para luego tratar las emociones que han propiciado el aislamiento.
Medicación: en algunos casos, es necesario recurrir a la medicación recetada por un profesional de la salud mental para aliviar algunos de los síntomas derivados del síndrome de Hikikomori, como pueden ser la ansiedad o la depresión.
Trabajo en equipo: con la motivación y el apoyo de familiares, amigos y cuidadores, superar el trastorno resultará mucho más sencillo.
Actividades de índole social y recreativa: actividades relacionadas con el arte, los deportes o la música pueden contribuir al desarrollo de habilidades sociales y fomentar la conexión con el mundo exterior.
En resumen, el síndrome de Hikikomori es un fenómeno mundial que afecta a personas en plena transición a la madurez.`,
      author: 'Maria Rojas Rojas',
      image: 'assets/Imagenes-Inicio/Blog/img20.png',
      category: 'Pediatría',
    }

  ];

  categories: string[] = ['Todas', ...new Set(this.blogdatos.map(b => b.category))];

  get filteredDatos() {
    return this.blogdatos.filter(b => {
      const matchesCategory =
        this.selectedCategory === 'Todas' || b.category === this.selectedCategory;
      const matchesSearch =
        b.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        b.description.toLowerCase().includes(this.searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }

moreInfo(blogdato: BlogDato) {
  this.selectedBlog = blogdato;
  document.body.style.overflow = 'hidden'; 
}

closeInfo() {
  this.selectedBlog = null;
  document.body.style.overflow = '';
}

}
