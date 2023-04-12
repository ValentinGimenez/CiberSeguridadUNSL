let preguntas = [
  {
    pregunta: "¿Cuáles son las principales características del ciberbullying o ciberacoso escolar?",
    correcta: "Todas las respuestas son correctas.",
    incorrecta: ["Utiliza los medios digitales y es repetitivo", "Genera daño y es intencional"],
    recomendacion: "Si piensas que te están acosando, lo primero que debes hacer es buscar ayuda en un adulto de confianza. Si el acoso ocurre en una plataforma social, puedes bloquear al acosador e informar sobre su comportamiento en la propia plataforma. Las empresas de redes sociales tienen la obligación de velar por la seguridad de sus usuarios.",
  },
  {
    pregunta: "¿Sabes qué es la identidad digital?",
    correcta: "Es la información que sobre nosotros se sube a Internet, tanto por nosotros mismos, como por amigos, familiares, compañeros o cualquier otra persona.",
    incorrecta: ["Es la información que Internet muestra sobre nosotros y que voluntariamente hemos compartido en Internet.", "Es la información que está disponible en Internet sobre nosotros y que ha sido compartida por familiares, amigos y conocidos."],
    recomendacion: "La identidad digital es una extensión de nuestra realidad offline y puede condicionar nuestra vida. Este es el motivo por el que es tan importante garantizar su seguridad. Para lograrlo es necesario proteger nuestra información con contraseñas actualizadas periódicamente, proteger nuestros dispositivos con software específicos, desconfiar de los mensajes que nos llegan de personas que no conocemos o direcciones sospechosas y no confiar nuestros códigos de autenticación o claves de acceso con nadie.",
  },
  {
    pregunta: "¿Qué es el Grooming?",
    correcta: "El grooming es un tipo de ciberacoso ejercido deliberadamente por un adulto para establecer una relación y un control emocional sobre un menor con el fin de preparar el terreno para su abuso sexual.",
    incorrecta: ["El grooming es otra forma de llamar al ciberacoso también conocido como ciberbullying.", "El grooming es la difusión o publicación de imágenes o videos de tipo sexual, producidos por el propio remitente, principalmente a través del teléfono móvil."],
    recomendacion: "El Grooming corresponde al accionar de un adulto que se comunica con un niño, una niña o adolescente a través de medios digitales (correos electrónicos, redes sociales, chats, juegos en línea) y se hace pasar por alguien de su edad con el fin de obtener algún tipo de resultado sexual o extorsión. En Argentina es considerado un delito penal (Ley 26.904). Ante este tipo de situaciones se debe: Apoyar al menor de manera incondicional. No contactarse con el acosador. No borrar información importante. No ceder al chantaje del acosador. Realizar la denuncia. Buscar ayuda psicológica para el menor.",
  },
  {
    pregunta: "Un virus podría instalarse en tu equipo simplemente visitando una página.",
    correcta: "Verdadero",
    incorrecta: ["Falso", "No se"],
    recomendacion: "Los fallos de los navegadores son muy utilizados por los ciberdelincuentes para infectar los equipos. Si tu navegador está desactualizado puede bastar con acceder a una página maliciosa, sin que te des cuenta, para descargar un virus. ¿Cómo puedes evitar este tipo de problemas? Manten actualizado el equipo (navegador y sistema operativo) para corregir fallos de seguridad,  acceda solo a páginas de confianza e instale un antivirus en tu computadora o en tu celular.",
  },
  {
    pregunta: "Al conectarte a una red WiFi pública corres el riesgo de que te roben tus datos almacenados en tu dispositivo (portátil, smartphone, tablet, etc.).",
    correcta: "Verdadero",
    incorrecta: ["Falso", "No se"],
    recomendacion: "Al formar parte de una red pública en la que existen otros usuarios conectados, nuestro dispositivo está expuesto y visible a los demás usuarios presentes en la misma. Por tanto somos susceptibles de recibir cualquier tipo de ataque desde uno de estos equipos conectados.",
  },
  {
    pregunta: "¿Es una buena práctica utilizar la misma contraseña para acceder a varios servicios de Internet?",
    correcta: "No, es mejor utilizar una contraseña diferente para cada servicio.",
    incorrecta: ["Depende, sólo si la contraseña cumple los requisitos mínimos de seguridad: contienen mayúsculas, minúsculas, números y caracteres especiales.", "Si, de esta forma no se te olvida y evitas tener que apuntarla en algún papel o cualquier otro sitio. "],
    recomendacion: "Los ciberdelincuentes consiguen bases de datos de contraseñas de sitios comprometidos, si utilizamos la misma contraseña en todos los sitios podemos ser víctimas de suplantación de identidad ya que el ciberdelincuente puede acceder a las cuentas de distintos sitios web o aplicaciones móviles.",
  },
  {
    pregunta: "Las redes sociales son un servicio que te permiten estar en contacto con otras personas, por eso…",
    correcta: "Eres cuidadoso con la información que compartes y tienes bien configurados los niveles de privacidad.",
    incorrecta: ["Compartes todo lo que haces con todos tus contactos, para eso es una red social.", "Aceptas todas las solicitudes de amistad que recibes, te gusta tener muchos amigos, así tus publicaciones tienen más éxito (más 'me gustas', compartidos, etc.)."],
    recomendacion: "Recomendación: Sé cuidadoso con la información que compartes, recuerda que una vez publicada en Internet, ésta es permanente, escapa de tu control y es accesible desde cualquier lugar del mundo. Configura adecuadamente las opciones de privacidad en tus perfiles de redes sociales, así controlas quién tiene acceso a tus publicaciones.",
  },
  {
    pregunta: "Al navegar por Internet me ha saltado un anuncio de una aplicación estupenda que añade funcionalidades increíbles a mi app de mensajería favorita. Sin embargo, solo se puede descargar directamente desde Internet y no en las tiendas oficiales. ¿Debo descargarla?",
    correcta: "No, porque puede ser maliciosa.",
    incorrecta: ["Sí, siempre y cuando revises los comentarios de la web de descarga.", "Sí, porque vas a ser la envidia de todos cuando vean las cosas nuevas que puedes hacer en la aplicación de mensajería."],
    recomendacion: "La descarga de aplicaciones alojadas en sitios web externos a las tiendas oficiales siempre es un riesgo, ya que pueden tratarse de aplicaciones maliciosas",
  },
  {
    pregunta: "Para mayor seguridad en las transacciones, debemos",
    correcta: "Disponer de una tarjeta exclusiva para compras online.",
    incorrecta: ["Usar un método de pago diferente para cada compra online. ", "Tener una cuenta de usuario en muchos servicios de intermediarios para realizar pagos online. "],
    recomendacion: "Para prevenir problemas en caso de realizar compras en una web fraudulenta y que nuestros datos de la tarjeta terminen en manos de un ciberdelincuente y este lleve a cabo compras sin nuestro consentimiento o transferencia, lo más seguro siempre será disponer de una tarjeta exclusiva para nuestras compras online, donde depositemos solo la cantidad que queramos gastar. De este modo, si por error realizáramos una compra en un sitio fraudulento, solo afectaría a dicha tarjeta, donde el saldo de dinero disponible está acotado.",
  },
];