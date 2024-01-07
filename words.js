const words = {
	ALZAR: true,
	ARREO: true,
	AUPAR: true,
	AÉREO: true,
	BAJAR: true,
	BALAR: true,
	BARBA: true,
	BATEA: true,
	BINAR: true,
	BUSTO: true,
	CALMA: true,
	CANAL: true,
	CAUCE: true,
	CICLO: true,
	CLIMA: true,
	COJÓN: true,
	CRACK: true,
	CROAR: true,
	CUEVA: true,
	CURVA: true,
	DEDAL: true,
	DEMÁS: true,
	DRAMA: true,
	DÓLAR: true,
	ERIAL: true,
	FAENA: true,
	FALTA: true,
	FIRME: true,
	FLOTA: true,
	FOCAL: true,
	FRITO: true,
	GASTO: true,
	GRANO: true,
	HECHA: true,
	HOGAR: true,
	HOSCO: true,
	HURÓN: true,
	ISLAM: true,
	JARRA: true,
	LABIO: true,
	LABRO: true,
	LAICO: true,
	LLAVE: true,
	MISIL: true,
	MONDO: true,
	MONJA: true,
	MOTOR: true,
	NAVAL: true,
	NEGAR: true,
	NINJA: true,
	NIVEL: true,
	OJALÁ: true,
	ORLAR: true,
	ORNAR: true,
	OTEAR: true,
	PAJAR: true,
	PARIR: true,
	PERCA: true,
	PLUTO: true,
	PROBÉ: true,
	PUTAS: true,
	PUÑAL: true,
	REZAR: true,
	ROLLO: true,
	SAJAR: true,
	SEÑAL: true,
	SIDRA: true,
	SITIO: true,
	SOLER: true,
	SOÑAR: true,
	SUBIR: true,
	SUDAR: true,
	SUMAR: true,
	TEJES: true,
	TEMAS: true,
	TENER: true,
	TIESO: true,
	TIMAR: true,
	TRAZO: true,
	TURNO: true,
	TUTOR: true,
	URGIR: true,
	ZAFIO: true,
	ZARZA: true,
	ZUECO: true,
	ÁBACO: true,
	MOCOS: true,
	CUOTA: true,
	HOYOS: true,
	DEUDA: true,
	CONDE: true,
	TELAR: true,
	LÁTEX: true,
	CAÍDA: true,
	VIVAR: true,
	CAMPO: true,
	MADRE: true,
	MOVER: true,
	GOTAS: true,
	RIÑAS: true,
	MUNDO: true,
	TARDE: true,
	LÁPIZ: true,
	TOQUE: true,
	ÓPERA: true,
	TECHO: true,
	VECES: true,
	VIEJO: true,
	CREMA: true,
	DAÑAR: true,
	LÉMUR: true,
	BALDE: true,
	TORRE: true,
	ORGÍA: true,
	FIBRA: true,
	CORTO: true,
	TARTA: true,
	BOGAR: true,
	FRUTO: true,
	USURA: true,
	TALAR: true,
	VUELO: true,
	URDIR: true,
	TOMAR: true,
	MILLA: true,
	LINDA: true,
	CAÑOS: true,
	VERSO: true,
	VASTO: true,
	TEJAR: true,
	RUEDA: true,
	CREER: true,
	LEZNA: true,
	GENTE: true,
	ÁNIMO: true,
	BANCO: true,
	SEÑOR: true,
	HIENA: true,
	AHORA: true,
	HILOS: true,
	VEDAR: true,
	ZARPA: true,
	PUTOS: true,
	DADOS: true,
	HERIR: true,
	PILAS: true,
	ROZAR: true,
	DESEO: true,
	LUNES: true,
	BIDET: true,
	MENOS: true,
	MOLAR: true,
	PARED: true,
	PARDO: true,
	ARETE: true,
	ÑANDU: true,
	YAPAR: true,
	CEGAR: true,
	RIMAR: true,
	CLAVO: true,
	IDEAS: true,
	AJENA: true,
	BREVA: true,
	BATIR: true,
	CURVO: true,
	AUNAR: true,
	JOVEN: true,
	PIEZA: true,
	DIOSA: true,
	VIAJE: true,
	TANTA: true,
	FLEXO: true,
	IMPÍO: true,
	TEJÓN: true,
	GESTO: true,
	FLUIR: true,
	SOPAR: true,
	IBICE: true,
	TESIS: true,
	ASPEN: true,
	CAÑÓN: true,
	DÓNDE: true,
	COBRE: true,
	VARÓN: true,
	FANGO: true,
	MORAR: true,
	HONDO: true,
	BURLA: true,
	VENTA: true,
	CLARO: true,
	POSTE: true,
	MEDIO: true,
	HOZAR: true,
	TASAR: true,
	CÓMIC: true,
	ANTES: true,
	DIETA: true,
	VENDA: true,
	ECHAR: true,
	PACTO: true,
	CORSO: true,
	VELAS: true,
	FAVOR: true,
	AVION: true,
	PEDAL: true,
	LEPRA: true,
	GUIAR: true,
	MARTE: true,
	DISCO: true,
	ANSIA: true,
	FALLÉ: true,
	GRITO: true,
	DINGO: true,
	FAJAR: true,
	NUEVE: true,
	FURIA: true,
	BINGO: true,
	SOLAR: true,
	RIZOS: true,
	SAUCE: true,
	REVER: true,
	ROTAR: true,
	JABÓN: true,
	HENIL: true,
	CASCO: true,
	DÁTIL: true,
	ARDUO: true,
	ATLAS: true,
	LIBAR: true,
	MIEDO: true,
	PIZZA: true,
	TAPAR: true,
	CAQUI: true,
	TEMER: true,
	OJEAR: true,
	CLAVE: true,
	ROYAL: true,
	LIBRO: true,
	NALGA: true,
	COPAR: true,
	ÓVULO: true,
	FARRA: true,
	HARÉN: true,
	MANOS: true,
	FONDO: true,
	COSTO: true,
	NOTAS: true,
	HOTEL: true,
	ZORRO: true,
	VAGAR: true,
	SEXAR: true,
	CLARA: true,
	LLANO: true,
	VENGA: true,
	LINDE: true,
	MATÓN: true,
	CONGA: true,
	RAYAR: true,
	ÍDOLO: true,
	NADAR: true,
	CAPAS: true,
	TENIA: true,
	MUELA: true,
	ASADO: true,
	ENERO: true,
	NUEVO: true,
	TESAR: true,
	UNTAR: true,
	SONAR: true,
	PRADO: true,
	TENIS: true,
	PINZA: true,
	ORINA: true,
	SERIE: true,
	RUIDO: true,
	BELLA: true,
	FECHA: true,
	FOBIA: true,
	OSTRA: true,
	PASEO: true,
	PODIO: true,
	OCASO: true,
	BASCA: true,
	LECHE: true,
	OVEJA: true,
	HORAS: true,
	UNIDA: true,
	LIMÓN: true,
	GARZA: true,
	LARGO: true,
	JUNTO: true,
	TAPÓN: true,
	GANAS: true,
	MORIR: true,
	BREAR: true,
	CERCO: true,
	PLAYA: true,
	DULCE: true,
	BLEDO: true,
	ÓVALO: true,
	PATAS: true,
	INDIO: true,
	OVINO: true,
	CARRO: true,
	CESAR: true,
	ANCLA: true,
	RETAR: true,
	SALIR: true,
	CHATA: true,
	TEXTO: true,
	LAXAR: true,
	CARTA: true,
	COCER: true,
	ACOSO: true,
	GAMBA: true,
	QUINO: true,
	GOLPE: true,
	NECIO: true,
	JARRO: true,
	LLENO: true,
	RUEDO: true,
	ESQUÍ: true,
	ANDÉN: true,
	MECER: true,
	ÁCARO: true,
	IMPAR: true,
	PISTA: true,
	UNCIR: true,
	JUNTA: true,
	POLEN: true,
	USUAL: true,
	TENGO: true,
	SACAR: true,
	ARAÑA: true,
	TOSER: true,
	ATACA: true,
	MOSTO: true,
	BUZOS: true,
	ALPES: true,
	MOTÍN: true,
	NIÑOS: true,
	TRAGO: true,
	SEDAR: true,
	VOCAL: true,
	GABÁN: true,
	FARSA: true,
	PLUMA: true,
	BUFAR: true,
	TUSAR: true,
	PILAR: true,
	ALTAR: true,
	AIRAR: true,
	SUCIO: true,
	BANDA: true,
	IDEAR: true,
	MORSA: true,
	MITAD: true,
	DESDE: true,
	PALMA: true,
	SALMO: true,
	ORUJO: true,
	ALDEA: true,
	ASEAR: true,
	OLIVO: true,
	PANAL: true,
	FOTOS: true,
	QUIEN: true,
	SIRGA: true,
	GRAVE: true,
	BARRO: true,
	RIVAL: true,
	MEDIR: true,
	FETÉN: true,
	OPTAR: true,
	NEGRO: true,
	RUBOR: true,
	ANDAR: true,
	BROMA: true,
	RURAL: true,
	RODEO: true,
	CURAR: true,
	RELOJ: true,
	BEATO: true,
	TRAPO: true,
	ESTÁN: true,
	CARPA: true,
	SANTO: true,
	ACERA: true,
	PODER: true,
	CALAR: true,
	MANSO: true,
	MAFIA: true,
	DEDOS: true,
	TÓRAX: true,
	BLUSA: true,
	UNICA: true,
	DECIR: true,
	FALSO: true,
	KEPIS: true,
	TANTO: true,
	VIDEO: true,
	BALSA: true,
	SABER: true,
	YELMO: true,
	BAILE: true,
	PECAR: true,
	EDILA: true,
	SOCIO: true,
	NADIE: true,
	PEINE: true,
	LIBRA: true,
	CAPAR: true,
	PANZA: true,
	EQUIS: true,
	LICOR: true,
	BASAR: true,
	TANGA: true,
	BUZÓN: true,
	JUSTO: true,
	TAJAR: true,
	DOLOR: true,
	LANAR: true,
	CIVIL: true,
	ASPAR: true,
	LARVA: true,
	DANZA: true,
	JULIO: true,
	CEJAS: true,
	AUTOR: true,
	BRAZA: true,
	FIJAR: true,
	MALLA: true,
	YEGUA: true,
	TIBIO: true,
	GORDA: true,
	LEGAR: true,
	VIRUS: true,
	DERBI: true,
	ÚNICO: true,
	LUCIR: true,
	CRUDO: true,
	PUNTA: true,
	BORDE: true,
	TROPA: true,
	PELAR: true,
	PAGAR: true,
	CALOR: true,
	DUROS: true,
	REGIR: true,
	VISAR: true,
	JAMAR: true,
	ERIZO: true,
	TRAER: true,
	PAUTA: true,
	FORMA: true,
	PISOS: true,
	BACHE: true,
	BARCA: true,
	VIEJA: true,
	FINAR: true,
	FUSTA: true,
	MESÓN: true,
	JUEGO: true,
	GRAVA: true,
	MARZO: true,
	HUESO: true,
	NEGRA: true,
	TACAR: true,
	NUNCA: true,
	ENOJO: true,
	MENOR: true,
	NOCHE: true,
	SORNA: true,
	PARTE: true,
	LANCE: true,
	ÑANDÚ: true,
	TRAMO: true,
	MEDIA: true,
	SORDO: true,
	TRIGO: true,
	ADOBO: true,
	PRIMA: true,
	PANEL: true,
	ZENIT: true,
	GEMIR: true,
	BROTE: true,
	LABIA: true,
	NORTE: true,
	RAPAR: true,
	SOBRE: true,
	MOMIA: true,
	AVISO: true,
	HASTA: true,
	CORTA: true,
	FILME: true,
	ALERO: true,
	NUEVA: true,
	RONDA: true,
	GUAPO: true,
	BONGO: true,
	ATRÁS: true,
	GRUPO: true,
	CANON: true,
	TONEL: true,
	PUNTO: true,
	BECAR: true,
	NIETA: true,
	SELLO: true,
	TACHO: true,
	LUCES: true,
	PARAR: true,
	INDIA: true,
	GARBO: true,
	PESCA: true,
	TANDA: true,
	BESAR: true,
	AOVAR: true,
	HUCHA: true,
	VARAR: true,
	YUYOS: true,
	LIBRE: true,
	HELAR: true,
	CAJÓN: true,
	COMÚN: true,
	AMIGA: true,
	FIDEL: true,
	OBRAR: true,
	HONOR: true,
	HOYAR: true,
	USADA: true,
	POETA: true,
	HALAR: true,
	ERROR: true,
	HECHO: true,
	SALSA: true,
	MAGNO: true,
	GNEIS: true,
	ALGÚN: true,
	ODIAR: true,
	ERRAR: true,
	UNIDO: true,
	SIETE: true,
	ÁRBOL: true,
	COBRA: true,
	JURAR: true,
	CULPA: true,
	SUMIR: true,
	COCHE: true,
	LINCE: true,
	JAMÓN: true,
	BALAS: true,
	VERBO: true,
	DELTA: true,
	ARADO: true,
	PUJAR: true,
	YUNTA: true,
	PICAR: true,
	DAMÁN: true,
	VACÍO: true,
	MACHO: true,
	MÚJOL: true,
	DUQUE: true,
	RADIO: true,
	LLAMA: true,
	CARNE: true,
	PEAJE: true,
	ALIAR: true,
	FILAR: true,
	PESAS: true,
	SELVA: true,
	RIFAR: true,
	TEMOR: true,
	EXTRA: true,
	NAVÍO: true,
	REINO: true,
	DEBER: true,
	ÁNGEL: true,
	BOMBO: true,
	VEJAR: true,
	METAL: true,
	ABRIL: true,
	USADO: true,
	OLIDO: true,
	CULTO: true,
	CHINA: true,
	VACAS: true,
	OREAR: true,
	OSADO: true,
	PAÑAL: true,
	JALAR: true,
	GALLO: true,
	DENSO: true,
	SERIO: true,
	FREÍR: true,
	CEBRA: true,
	ETAPA: true,
	YERMO: true,
	BARCO: true,
	VOTAR: true,
	HABLA: true,
	MAGIA: true,
	OKAPI: true,
	FIRMA: true,
	HILAR: true,
	RANGO: true,
	GENIO: true,
	DEBUT: true,
	SIMIO: true,
	CESTA: true,
	CATAR: true,
	NOTAR: true,
	ZORRA: true,
	CINCO: true,
	BAÑAR: true,
	ÉPOCA: true,
	FUEGO: true,
	HÉROE: true,
	HORNO: true,
	DOSIS: true,
	PUROS: true,
	LUTOS: true,
	RUBIO: true,
	RENAL: true,
	SEPIA: true,
	ABAJO: true,
	SENDA: true,
	GIBAR: true,
	RIMAS: true,
	COMBO: true,
	ROLAR: true,
	FUNDA: true,
	MAYOR: true,
	DOBLE: true,
	SIGLO: true,
	RADAR: true,
	COSAS: true,
	OREJA: true,
	TERMO: true,
	ICONO: true,
	ROBOT: true,
	CHICO: true,
	CESTO: true,
	NIETO: true,
	MESES: true,
	CIFRA: true,
	BORDO: true,
	QUIZÁ: true,
	ACTOR: true,
	FLEMA: true,
	GLOBO: true,
	LIMAR: true,
	IGUAL: true,
	TONTO: true,
	RATAS: true,
	FOSAS: true,
	BAHÍA: true,
	RATÓN: true,
	ESPÍA: true,
	OTOÑO: true,
	VILLA: true,
	MUTAR: true,
	BUQUE: true,
	TUMOR: true,
	CERCA: true,
	PARÍS: true,
	CERRO: true,
	CALLE: true,
	ATAÚD: true,
	LÍDER: true,
	PENCA: true,
	JOYAS: true,
	CAZAR: true,
	TALÓN: true,
	METER: true,
	JUDIO: true,
	PACER: true,
	TRAZA: true,
	PERRA: true,
	SACRO: true,
	LÍNEA: true,
	SUELA: true,
	HONDA: true,
	LIGAR: true,
	LÁSER: true,
	TAREA: true,
	PILON: true,
	LITRO: true,
	TERCO: true,
	ANCHO: true,
	GRIPE: true,
	TELÓN: true,
	MUSGO: true,
	PESAR: true,
	TARAR: true,
	MUCHO: true,
	POLAR: true,
	PLANA: true,
	CATRE: true,
	TENOR: true,
	BILIS: true,
	REGLA: true,
	PAUSA: true,
	MODAS: true,
	VELAR: true,
	LEJOS: true,
	APOYO: true,
	ARMAR: true,
	CIELO: true,
	SALAR: true,
	TAZÓN: true,
	AMBOS: true,
	CARGA: true,
	VIVIR: true,
	GORRO: true,
	SIFÓN: true,
	FELIZ: true,
	SUIZA: true,
	FAROL: true,
	LENTO: true,
	BARDA: true,
	CERDO: true,
	PENAL: true,
	TECLA: true,
	TOCAR: true,
	SALUD: true,
	TROTE: true,
	RUGIR: true,
	TABLA: true,
	BOLSO: true,
	VACÍA: true,
	PEDIR: true,
	PUYAS: true,
	PULIR: true,
	RABIA: true,
	MAREA: true,
	HABER: true,
	LISTA: true,
	MANGO: true,
	RIEGO: true,
	CEÑIR: true,
	ENTRE: true,
	ASTRO: true,
	FLUJO: true,
	DUELO: true,
	MORSE: true,
	CHOZA: true,
	SISAR: true,
	PARCA: true,
	HORCO: true,
	CACAO: true,
	PLATO: true,
	MESAS: true,
	JUMAR: true,
	MURGA: true,
	AVIÓN: true,
	ORZAR: true,
	ÚTERO: true,
	FÓSIL: true,
	MUSEO: true,
	PULSO: true,
	PIOJO: true,
	PALOS: true,
	ROBAR: true,
	LAMER: true,
	AJADA: true,
	NOVIO: true,
	CELTA: true,
	CAGAR: true,
	AROMA: true,
	FARDO: true,
	AMBAS: true,
	BOLLO: true,
	BORLA: true,
	RUMOR: true,
	SUSAN: true,
	RAJAR: true,
	LUEGO: true,
	KOALA: true,
	AXILA: true,
	MAESE: true,
	SABLE: true,
	CABER: true,
	CENAR: true,
	HACIA: true,
	AJUAR: true,
	UNGIR: true,
	TRONO: true,
	PAPEL: true,
	CAUSA: true,
	LEGAL: true,
	JODER: true,
	BAJÓN: true,
	VOCES: true,
	GOZAR: true,
	PLACA: true,
	PIANO: true,
	RALEA: true,
	FUMAR: true,
	RESTO: true,
	HEDER: true,
	HUEVO: true,
	REYES: true,
	ZOMBI: true,
	ORUGA: true,
	MUDAR: true,
	BANCA: true,
	REINA: true,
	TEJER: true,
	CAZOS: true,
	BALÓN: true,
	AOJAR: true,
	MOTEL: true,
	HOJAS: true,
	BARRA: true,
	LUGAR: true,
	TOPAR: true,
	ROBLE: true,
	CASAR: true,
	BEBER: true,
	BOYAR: true,
	GRAMO: true,
	PATIO: true,
	SUELO: true,
	PERLA: true,
	COLOR: true,
	ABUSO: true,
	FRUTA: true,
	CISNE: true,
	HARTO: true,
	ÉPICO: true,
	SABIO: true,
	AYUDA: true,
	METRO: true,
	ÁLBUM: true,
	HONGO: true,
	SALTO: true,
	ROTOR: true,
	ARENA: true,
	YERRO: true,
	BOTÓN: true,
	VACAR: true,
	TEMAR: true,
	PINAR: true,
	ZAFAR: true,
	LENTA: true,
	LETRA: true,
	LAVAR: true,
	COGER: true,
	HIPAR: true,
	VAGÓN: true,
	MISMO: true,
	TENAZ: true,
	PASTO: true,
	GANAR: true,
	ALIAS: true,
	AÑADA: true,
	CITAR: true,
	GOLFA: true,
	REHÉN: true,
	SESGO: true,
	ESTAR: true,
	VALER: true,
	POTRO: true,
	BRAZO: true,
	GIRAR: true,
	LOCAL: true,
	CONGO: true,
	CIRCO: true,
	ASPAS: true,
	PLOMO: true,
	MAJAR: true,
	NIÑAS: true,
	NUERA: true,
	DICHA: true,
	PODAR: true,
	TOTAL: true,
	RULAR: true,
	VALLE: true,
	MOZOS: true,
	RITMO: true,
	MORAL: true,
	PATEO: true,
	MUGIR: true,
	AFEAR: true,
	SANAR: true,
	FERIA: true,
	CEDER: true,
	MICRO: true,
	ALBAR: true,
	ABEJA: true,
	BUENO: true,
	ALEGA: true,
	DUCHO: true,
	OMEGA: true,
	ILESO: true,
	HIMEN: true,
	SUEÑO: true,
	RACHA: true,
	MARCO: true,
	JERBO: true,
	PENAR: true,
	TAPAS: true,
	PRIMO: true,
	SERIA: true,
	NERÓN: true,
	FRESA: true,
	HUIDO: true,
	LEVAR: true,
	LUNAR: true,
	RENTA: true,
	BICHO: true,
	NEVAR: true,
	LINDO: true,
	LENTE: true,
	HIMNO: true,
	LISTO: true,
	GAFAR: true,
	TRIPA: true,
	HACHA: true,
	TUPIR: true,
	SUDOR: true,
	GUASA: true,
	MORRO: true,
	AGUJA: true,
	CUATE: true,
	CAPAZ: true,
	FLÚOR: true,
	REMOS: true,
	ESTOS: true,
	VIOLA: true,
	JUNIO: true,
	VENIR: true,
	APEAR: true,
	SURCO: true,
	POLOS: true,
	VISOR: true,
	BOTAS: true,
	TUNAR: true,
	TRAMA: true,
	ACASO: true,
	CREAR: true,
	COSER: true,
	TINTO: true,
	MIRAR: true,
	SEGÚN: true,
	CUERO: true,
	FLASH: true,
	TRAJE: true,
	ROCAS: true,
	ETNIA: true,
	FALDA: true,
	MIMAR: true,
	CAUTO: true,
	TIMÓN: true,
	PITAR: true,
	BRIDA: true,
	SOBAR: true,
	CIEGO: true,
	COSTA: true,
	TRUCO: true,
	ABRIR: true,
	TRENA: true,
	DUCHA: true,
	ÁCIDO: true,
	OESTE: true,
	BRUJO: true,
	PECHO: true,
	HÁBIL: true,
	MANCO: true,
	COPIA: true,
	GRIFO: true,
	JERGA: true,
	DEJAR: true,
	FICHA: true,
	CRIAR: true,
	ARROZ: true,
	ALEAR: true,
	CORRO: true,
	POBRE: true,
	MATAR: true,
	MIOPE: true,
	CHINO: true,
	GUION: true,
	FUGAZ: true,
	OASIS: true,
	QUIÉN: true,
	LUCRO: true,
	QUESO: true,
	CENSO: true,
	LOGRO: true,
	LIGUE: true,
	CALVO: true,
	HOBBY: true,
	BOLSA: true,
	FACIL: true,
	BIZCO: true,
	GALÁN: true,
	CANTO: true,
	OVULO: true,
	PRIOR: true,
	AGUDO: true,
	USTED: true,
	LUCHA: true,
	MIGAR: true,
	NOBLE: true,
	GUSTO: true,
	POLLO: true,
	FÁCIL: true,
	TOSCO: true,
	VALOR: true,
	ÉXITO: true,
	MOLDE: true,
	PEGAR: true,
	XEROX: true,
	MAMUT: true,
	BRUJA: true,
	DATAR: true,
	OVNIS: true,
	HIELO: true,
	SOBRA: true,
	PADRE: true,
	COLAR: true,
	AQUEL: true,
	LEÑOS: true,
	ZANJA: true,
	RIZAR: true,
	TAZAR: true,
	DONDE: true,
	RASAR: true,
	RAPTO: true,
	MOSCA: true,
	RAZÓN: true,
	JALEO: true,
	AGUAR: true,
	PECES: true,
	NARRA: true,
	TESÓN: true,
	VOLAR: true,
	ASILO: true,
	VENUS: true,
	JAULA: true,
	CORTE: true,
	RODAR: true,
	SAUNA: true,
	CABLE: true,
	PLENO: true,
	PARRA: true,
	TIRAR: true,
	TALLA: true,
	LIJAR: true,
	CEJAR: true,
	DIVÁN: true,
	TÚNEL: true,
	ANDEN: true,
	SIGNO: true,
	FINAL: true,
	LAPSO: true,
	BOTAR: true,
	ACIDO: true,
	YACER: true,
	CURSO: true,
	RUTAS: true,
	AMIGO: true,
	NORMA: true,
	TIBIA: true,
	VAINA: true,
	ROSCA: true,
	VETAR: true,
	FRASE: true,
	CELOS: true,
	ÚNICA: true,
	TUCÁN: true,
	ROGAR: true,
	PASTA: true,
	JAMÁS: true,
	GANGA: true,
	CABRA: true,
	ÍBERO: true,
	QUEJA: true,
	MAGMA: true,
	AVIAR: true,
	VIRAR: true,
	GANSO: true,
	TIGRE: true,
	TOLDO: true,
	ALFAR: true,
	CARAS: true,
	HAWAI: true,
	ZAPAR: true,
	LAZAR: true,
	FINCA: true,
	MANTA: true,
	FALLO: true,
	MAMAR: true,
	UNIÓN: true,
	OBESO: true,
	VIUDA: true,
	HIJOS: true,
	NACER: true,
	KRILL: true,
	MURAL: true,
	LACAR: true,
	MANAR: true,
};

module.exports = words;