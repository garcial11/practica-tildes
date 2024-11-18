const ejercicios = [
    // PALABRAS AGUDAS CON TILDE
    {
        frase: "Mi hermano tom_ el bus",
        palabra: "tomó",
        opciones: ["tomo", "tomó"],
        reglas: [
            "Palabra aguda terminada en vocal",
            "Palabra aguda terminada en -n, -s o vocal",
            "Palabra grave terminada en consonante",
            "Palabra esdrújula"
        ],
        reglaCorrecta: "Palabra aguda terminada en -n, -s o vocal",
        categoria: "agudas",
        nivel: "facil",
        explicacion: "Las palabras agudas llevan tilde cuando terminan en -n, -s o vocal. En este caso, 'tomó' es aguda (última sílaba tónica) y termina en vocal (-ó)."
    },
    {
        frase: "El jab_n está en el baño",
        palabra: "jabón",
        opciones: ["jabon", "jabón"],
        reglas: [
            "Palabra aguda terminada en -n, -s o vocal",
            "Palabra grave terminada en -n",
            "Palabra esdrújula",
            "Palabra aguda terminada en consonante"
        ],
        reglaCorrecta: "Palabra aguda terminada en -n, -s o vocal",
        categoria: "agudas",
        nivel: "facil",
        explicacion: "Las palabras agudas llevan tilde cuando terminan en -n, -s o vocal. En este caso, 'jabón' es aguda y termina en -n."
    },
    {
        frase: "El capit_n dirigió el barco",
        palabra: "capitán",
        opciones: ["capitan", "capitán"],
        reglas: [
            "Palabra aguda terminada en -n, -s o vocal",
            "Palabra grave terminada en -n",
            "Palabra esdrújula",
            "Palabra aguda terminada en consonante"
        ],
        reglaCorrecta: "Palabra aguda terminada en -n, -s o vocal",
        categoria: "agudas",
        nivel: "facil",
        explicacion: "Las palabras agudas llevan tilde cuando terminan en -n, -s o vocal. 'Capitán' es aguda y termina en -n."
    },

    // PALABRAS AGUDAS SIN TILDE
    {
        frase: "El hotel tiene un ascens_r nuevo",
        palabra: "ascensor",
        opciones: ["ascensór", "ascensor"],
        reglas: [
            "Palabra aguda sin tilde por terminar en -r",
            "Palabra aguda con tilde por terminar en -r",
            "Palabra grave terminada en consonante",
            "Palabra esdrújula"
        ],
        reglaCorrecta: "Palabra aguda sin tilde por terminar en -r",
        categoria: "agudas",
        nivel: "medio",
        explicacion: "Las palabras agudas NO llevan tilde cuando terminan en consonantes diferentes de -n o -s. 'Ascensor' termina en -r."
    },

    // PALABRAS GRAVES CON TILDE
    {
        frase: "El l_piz es azul",
        palabra: "lápiz",
        opciones: ["lapiz", "lápiz"],
        reglas: [
            "Palabra aguda terminada en -z",
            "Palabra grave terminada en consonante",
            "Palabra esdrújula",
            "Palabra aguda terminada en vocal"
        ],
        reglaCorrecta: "Palabra grave terminada en consonante",
        categoria: "graves",
        nivel: "facil",
        explicacion: "Las palabras graves llevan tilde cuando terminan en consonante que no sea -n ni -s. 'Lápiz' es grave y termina en -z."
    },
    {
        frase: "El _rbol es muy alto",
        palabra: "árbol",
        opciones: ["arbol", "árbol"],
        reglas: [
            "Palabra aguda terminada en -l",
            "Palabra grave terminada en consonante",
            "Palabra esdrújula",
            "Palabra grave terminada en vocal"
        ],
        reglaCorrecta: "Palabra grave terminada en consonante",
        categoria: "graves",
        nivel: "facil",
        explicacion: "Las palabras graves llevan tilde cuando terminan en consonante que no sea -n ni -s. 'Árbol' es grave y termina en -l."
    },

    // PALABRAS GRAVES SIN TILDE
    {
        frase: "La cas_ es grande",
        palabra: "casa",
        opciones: ["casa", "cása"],
        reglas: [
            "Palabra grave sin tilde por terminar en vocal",
            "Palabra grave con tilde por ser grave",
            "Palabra aguda terminada en vocal",
            "Palabra esdrújula"
        ],
        reglaCorrecta: "Palabra grave sin tilde por terminar en vocal",
        categoria: "graves",
        nivel: "facil",
        explicacion: "Las palabras graves NO llevan tilde cuando terminan en vocal. 'Casa' es grave y termina en -a."
    },

    // PALABRAS ESDRÚJULAS
    {
        frase: "El p_jaro vuela alto",
        palabra: "pájaro",
        opciones: ["pajaro", "pájaro"],
        reglas: [
            "Palabra aguda terminada en vocal",
            "Palabra grave terminada en vocal",
            "Palabra esdrújula",
            "Palabra grave con tilde"
        ],
        reglaCorrecta: "Palabra esdrújula",
        categoria: "esdrujulas",
        nivel: "facil",
        explicacion: "Las palabras esdrújulas SIEMPRE llevan tilde. En 'pájaro' la antepenúltima sílaba es tónica (pá)."
    },

    // HIATOS
    {
        frase: "Mi t_o vive lejos",
        palabra: "tío",
        opciones: ["tio", "tío"],
        reglas: [
            "Hiato: vocal cerrada tónica + vocal abierta",
            "Diptongo: vocal abierta + vocal cerrada",
            "Palabra aguda terminada en vocal",
            "Palabra grave"
        ],
        reglaCorrecta: "Hiato: vocal cerrada tónica + vocal abierta",
        categoria: "hiatos",
        nivel: "medio",
        explicacion: "Cuando hay un hiato formado por vocal cerrada tónica (í) y vocal abierta (o), la vocal cerrada lleva tilde."
    },

// MONOSÍLABOS CON TILDE DIACRÍTICA
{
    frase: "No s_ si _l vendr_, pero s_ que tu rel_jate",
    palabras: ["sé", "él", "sí", "tú", "relájate"],
    opciones: [
        ["se", "sé"],
        ["el", "él"],
        ["si", "sí"],
        ["tu", "tú"]
    ],
    reglas: [
        "Sé (verbo saber) vs Se (pronombre)",
        "Él (pronombre) vs El (artículo)",
        "Sí (afirmación) vs Si (condicional)",
        "Tú (pronombre) vs Tu (posesivo)"
    ],
    categoria: "diacritica",
    nivel: "medio",
    explicacion: {
        "sé": "Verbo 'saber' en primera persona (yo sé) vs pronombre reflexivo 'se'",
        "él": "Pronombre personal ('él viene') vs artículo ('el libro')",
        "sí": "Adverbio de afirmación vs conjunción condicional 'si'",
        "tú": "Pronombre personal ('tú vienes') vs adjetivo posesivo ('tu libro')"
    }
},

// MÁS/MAS
{
    frase: "Quiero m_s café, m_s no hay m_s",
    palabras: ["más", "mas", "más"],
    opciones: [
        ["mas", "más"],
        ["mas", "más"],
        ["mas", "más"]
    ],
    reglas: [
        "Más (cantidad o adición)",
        "Mas (pero, sin embargo)",
        "Más (cantidad o adición)"
    ],
    categoria: "diacritica",
    nivel: "medio",
    explicacion: "'Más' indica cantidad o adición, mientras que 'mas' equivale a 'pero' o 'sin embargo'"
},

// DÉ/DE
{
    frase: "Espero que me d_ el libro de Juan",
    palabras: ["dé"],
    opciones: [
        ["de", "dé"]
    ],
    reglas: [
        "Dé (verbo dar)",
        "De (preposición)"
    ],
    categoria: "diacritica",
    nivel: "medio",
    explicacion: "'Dé' es del verbo dar (subjuntivo), mientras que 'de' es una preposición"
},

// TÉ/TE
{
    frase: "¿Quieres t_ con leche? T_ lo preparé especialmente",
    palabras: ["té", "te"],
    opciones: [
        ["te", "té"],
        ["te", "té"]
    ],
    reglas: [
        "Té (bebida)",
        "Te (pronombre)"
    ],
    categoria: "diacritica",
    nivel: "medio",
    explicacion: "'Té' es la bebida, mientras que 'te' es un pronombre personal"
},

// MÍ/MI
{
    frase: "A m_ me gusta mi música",
    palabras: ["mí"],
    opciones: [
        ["mi", "mí"]
    ],
    reglas: [
        "Mí (pronombre con preposición)",
        "Mi (posesivo o nota musical)"
    ],
    categoria: "diacritica",
    nivel: "medio",
    explicacion: "'Mí' es pronombre personal con preposición, 'mi' es posesivo o nota musical"
},

// SÉ/SE
{
    frase: "S_ que s_ lo dije, pero se fue",
    palabras: ["sé", "sé", "se"],
    opciones: [
        ["se", "sé"],
        ["se", "sé"],
        ["se", "sé"]
    ],
    reglas: [
        "Sé (verbo saber)",
        "Sé (verbo ser)",
        "Se (pronombre)"
    ],
    categoria: "diacritica",
    nivel: "dificil",
    explicacion: "'Sé' puede ser del verbo saber o del verbo ser (imperativo), 'se' es pronombre"
},

// AÚN/AUN
{
    frase: "A_n no ha llegado, aun cuando le avis_",
    palabras: ["aún", "aun"],
    opciones: [
        ["aun", "aún"],
        ["aun", "aún"]
    ],
    reglas: [
        "Aún (todavía)",
        "Aun (incluso, hasta)"
    ],
    categoria: "diacritica",
    nivel: "dificil",
    explicacion: "'Aún' equivale a 'todavía', mientras que 'aun' equivale a 'incluso' o 'hasta'"
},

// EJERCICIO COMBINADO
{
    frase: "S_ que _l vendr_ a tomar el t_, m_s no s_ cu_ndo",
    palabras: ["sé", "él", "té", "mas", "sé", "cuándo"],
    opciones: [
        ["se", "sé"],
        ["el", "él"],
        ["te", "té"],
        ["mas", "más"],
        ["se", "sé"],
        ["cuando", "cuándo"]
    ],
    reglas: [
        "Sé (verbo saber)",
        "Él (pronombre)",
        "Té (bebida)",
        "Mas (pero)",
        "Sé (verbo saber)",
        "Cuándo (interrogativo indirecto)"
    ],
    categoria: "diacritica",
    nivel: "dificil",
    explicacion: "Combina varios casos de tilde diacrítica en una sola frase"
},

// PORQUÉ/PORQUE/POR QUE/POR QUÉ
{
    frase: "¿Por qu_ no viniste? Porque no supe el porqu_, por que me avisaron tarde",
    palabras: ["por qué", "porque", "porqué", "por que"],
    opciones: [
        ["porque", "por qué"],
        ["por que", "porque"],
        ["porque", "porqué"],
        ["porque", "por que"]
    ],
    reglas: [
        "Por qué (pregunta)",
        "Porque (respuesta)",
        "Porqué (sustantivo: la razón)",
        "Por que (por el cual)"
    ],
    categoria: "diacritica",
    nivel: "dificil",
    explicacion: {
        "por qué": "Se usa en preguntas directas e indirectas",
        "porque": "Conjunción causal (respuesta)",
        "porqué": "Sustantivo que significa 'la razón' o 'el motivo'",
        "por que": "Equivale a 'por el cual' o 'por la cual'"
    }
},

// QUÉ/QUE/CUÁL/CUAL
{
    frase: "¿Qu_ libro quieres? El qu_ est_ en la mesa, cu_l sea está bien",
    palabras: ["qué", "que", "cuál"],
    opciones: [
        ["que", "qué"],
        ["que", "qué"],
        ["cual", "cuál"]
    ],
    reglas: [
        "Qué (interrogativo o exclamativo)",
        "Que (relativo o conjunción)",
        "Cuál (interrogativo o exclamativo)"
    ],
    categoria: "diacritica",
    nivel: "medio",
    explicacion: {
        "qué": "Interrogativo o exclamativo",
        "que": "Pronombre relativo o conjunción",
        "cuál": "Interrogativo o exclamativo (sinónimo de qué)"
    }
},


    // PALABRAS AGUDAS - NIVEL MEDIO/AVANZADO
{
    frase: "La reuni_n termin_ después de mediodía",
    palabra: "terminó",
    opciones: ["termino", "terminó"],
    reglas: [
        "Palabra aguda terminada en vocal",
        "Palabra grave sin tilde",
        "Palabra esdrújula",
        "Diptongo sin tilde"
    ],
    reglaCorrecta: "Palabra aguda terminada en vocal",
    categoria: "agudas",
    nivel: "medio",
    explicacion: "En 'terminó', además de ser aguda y terminar en vocal, observa que 'termino' sin tilde podría ser un sustantivo o primera persona del presente."
},
{
    frase: "El colibr_ volaba entre las flores del jard_n",
    palabra: "colibrí",
    opciones: ["colibri", "colibrí"],
    reglas: [
        "Palabra aguda terminada en vocal",
        "Palabra grave con hiato",
        "Palabra esdrújula",
        "Hiato con vocal cerrada tónica"
    ],
    reglaCorrecta: "Palabra aguda terminada en vocal",
    categoria: "agudas",
    nivel: "dificil",
    explicacion: "Es una palabra aguda que termina en vocal cerrada 'i'. En este caso, no forma hiato con vocal anterior."
},

// COMBINACIÓN DE REGLAS - NIVEL AVANZADO
{
    frase: "El h_roe le_a junto al r_o",
    palabras: ["héroe", "leía", "río"],
    opciones: [
        ["heroe", "héroe"],
        ["leia", "leía"],
        ["rio", "río"]
    ],
    reglas: [
        "Palabra grave con hiato",
        "Hiato con vocal cerrada tónica",
        "Palabra esdrújula",
        "Diptongo que se rompe"
    ],
    reglaCorrecta: "Multiple: héroe (grave terminada en vocal), leía (hiato), río (hiato)",
    categoria: "multiple",
    nivel: "dificil",
    explicacion: "Esta oración combina varias reglas: 'héroe' es grave terminada en vocal, 'leía' tiene hiato entre e-í, y 'río' tiene hiato entre í-o."
},

// HIATOS COMPLEJOS
{
    frase: "El fre_r del pescado atra_a a los gatos",
    palabras: ["freír", "atraía"],
    opciones: [
        ["freir", "freír"],
        ["atraia", "atraía"]
    ],
    reglas: [
        "Hiato con vocal cerrada tónica",
        "Diptongo sin romper",
        "Palabra aguda normal",
        "Palabra grave con hiato"
    ],
    reglaCorrecta: "Hiato con vocal cerrada tónica en ambos casos",
    categoria: "hiatos",
    nivel: "dificil",
    explicacion: "Tanto 'freír' como 'atraía' contienen hiatos donde la vocal cerrada (i) es tónica y por eso lleva tilde."
},

// DIPTONGOS VS HIATOS
{
    frase: "La poes_a del jesu_ta era sobre el d_a",
    palabras: ["poesía", "jesuita", "día"],
    opciones: [
        ["poesia", "poesía"],
        ["jesuita", "jesuíta"],
        ["dia", "día"]
    ],
    reglas: [
        "Hiato siempre",
        "Diptongo que no se rompe",
        "Hiato con vocal cerrada tónica",
        "Palabra aguda normal"
    ],
    reglaCorrecta: "Varía: poesía (hiato), jesuita (diptongo), día (hiato)",
    categoria: "hiatos_diptongos",
    nivel: "dificil",
    explicacion: "Compara: en 'poesía' hay hiato í-a, 'jesuita' mantiene el diptongo ui, y en 'día' hay hiato í-a."
},

// ACENTUACIÓN EN ADVERBIOS
{
    frase: "Caminar_ r_pidamente hac_a la estación",
    palabras: ["caminaré", "rápidamente", "hacia"],
    opciones: [
        ["caminare", "caminaré"],
        ["rapidamente", "rápidamente"],
        ["hacia", "hacía"]
    ],
    reglas: [
        "Palabra aguda en futuro",
        "Adverbio derivado de adjetivo",
        "Palabra con significado variable",
        "Preposición sin tilde"
    ],
    reglaCorrecta: "Multiple: aguda (caminaré), adverbio de adjetivo esdrújulo (rápidamente), preposición (hacia)",
    categoria: "multiple",
    nivel: "dificil",
    explicacion: "En esta frase: 'caminaré' es futuro (aguda), 'rápidamente' conserva la tilde de 'rápido', y 'hacia' es preposición (sin tilde, diferente del imperfecto 'hacía')."
},
// PALABRAS CON AMBIGÜEDAD DE SIGNIFICADO
{
    frase: "El m_dico public_ que el diagn_stico era grave",
    palabras: ["médico", "publicó", "diagnóstico"],
    opciones: [
        ["medico", "médico"],
        ["publico", "publicó"],
        ["diagnostico", "diagnóstico"]
    ],
    reglas: [
        "Palabra esdrújula",
        "Palabra aguda terminada en vocal",
        "Palabra grave terminada en vocal",
        "Palabra grave terminada en o"
    ],
    reglaCorrecta: "Multiple: médico (esdrújula), publicó (aguda), diagnóstico (esdrújula)",
    categoria: "multiple",
    nivel: "medio",
    explicacion: "Cada palabra sigue una regla diferente: 'médico' es esdrújula, 'publicó' es aguda terminada en vocal, y 'diagnóstico' es esdrújula."
},

// PALABRAS COMPUESTAS
{
    frase: "El d_cimoséptimo piso del rascac_elos",
    palabra: "decimoséptimo",
    opciones: ["decimoseptimo", "decimoséptimo"],
    reglas: [
        "Palabra compuesta que mantiene la tilde original",
        "Palabra esdrújula",
        "Palabra sobreesdrújula",
        "Palabra grave con tilde"
    ],
    reglaCorrecta: "Palabra compuesta que mantiene la tilde original",
    categoria: "compuestas",
    nivel: "dificil",
    explicacion: "En palabras compuestas, el segundo componente mantiene su tilde original si la tenía ('séptimo')."
},

// ADVERBIOS EN -MENTE
{
    frase: "El corri_ tr_gicamente hacia la salida",
    palabras: ["corrió", "trágicamente"],
    opciones: [
        ["corrio", "corrió"],
        ["tragicamente", "trágicamente"]
    ],
    reglas: [
        "Palabra aguda con tilde",
        "Adverbio que mantiene la tilde del adjetivo",
        "Palabra esdrújula normal",
        "Palabra grave con tilde"
    ],
    reglaCorrecta: "Multiple: aguda (corrió) y adverbio de trágico (trágicamente)",
    categoria: "multiple",
    nivel: "medio",
    explicacion: "'Corrió' es aguda terminada en vocal, y 'trágicamente' mantiene la tilde de 'trágico' al formar el adverbio."
},

// MONOSÍLABOS Y TILDE DIACRÍTICA
{
    frase: "No s_ si _l vendr_ hoy o ma_ana",
    palabras: ["sé", "él", "vendrá", "mañana"],
    opciones: [
        ["se", "sé"],
        ["el", "él"],
        ["vendra", "vendrá"],
        ["manana", "mañana"]
    ],
    reglas: [
        "Tilde diacrítica en monosílabos",
        "Palabra aguda terminada en vocal",
        "Palabra grave sin tilde",
        "Palabra esdrújula"
    ],
    reglaCorrecta: "Multiple: sé (diacrítica), él (diacrítica), vendrá (aguda), mañana (grave sin tilde)",
    categoria: "diacritica",
    nivel: "dificil",
    explicacion: "'Sé' y 'él' llevan tilde diacrítica para distinguirlos de 'se' y 'el'. 'Vendrá' es aguda terminada en vocal."
},

// HIATOS ESPECIALES
{
    frase: "La geograf_a del pa_s es incre_ble",
    palabras: ["geografía", "país", "increíble"],
    opciones: [
        ["geografia", "geografía"],
        ["pais", "país"],
        ["increible", "increíble"]
    ],
    reglas: [
        "Hiato con vocal cerrada tónica",
        "Palabra aguda normal",
        "Diptongo sin romper",
        "Palabra esdrújula"
    ],
    reglaCorrecta: "Multiple: todos son hiatos con vocal cerrada tónica",
    categoria: "hiatos",
    nivel: "dificil",
    explicacion: "Las tres palabras tienen hiatos con vocal cerrada tónica (í) que siempre lleva tilde."
},

// SUPERLATIVOS
{
    frase: "Es fac_lisimo resolver este ejercicio dif_cil",
    palabras: ["facilísimo", "difícil"],
    opciones: [
        ["facilisimo", "facilísimo"],
        ["dificil", "difícil"]
    ],
    reglas: [
        "Superlativo que mantiene la posición de la tilde",
        "Palabra grave terminada en consonante",
        "Palabra esdrújula normal",
        "Palabra sobreesdrújula"
    ],
    reglaCorrecta: "Multiple: facilísimo (superlativo esdrújulo) y difícil (grave terminada en l)",
    categoria: "multiple",
    nivel: "medio",
    explicacion: "'Facilísimo' es el superlativo de 'fácil' y sigue la regla de palabras esdrújulas. 'Difícil' es grave terminada en consonante que no es n ni s."
},

// VERBOS CON PRONOMBRES ENCLÍTICOS
{
    frase: "Dir_gete al sal_n y esp_rame allí",
    palabras: ["dirígete", "salón", "espérame"],
    opciones: [
        ["dirigete", "dirígete"],
        ["salon", "salón"],
        ["esperame", "espérame"]
    ],
    reglas: [
        "Verbo con pronombre que cambia la tilde",
        "Palabra aguda terminada en n",
        "Palabra esdrújula por pronombre",
        "Palabra grave normal"
    ],
    reglaCorrecta: "Multiple: dirígete (esdrújula), salón (aguda), espérame (esdrújula)",
    categoria: "verbos_encliticos",
    nivel: "dificil",
    explicacion: "Al añadir pronombres a los verbos, pueden convertirse en esdrújulas ('dirígete', 'espérame'). 'Salón' es aguda terminada en n."
},
// VERBOS REFLEXIVOS Y PRONOMBRES
{
    frase: "Sent_monos aqu_ y rel_jate un momento",
    palabras: ["sentémonos", "aquí", "relájate"],
    opciones: [
        ["sentemonos", "sentémonos"],
        ["aqui", "aquí"],
        ["relajate", "relájate"]
    ],
    reglas: [
        "Verbo con pronombre que genera esdrújula",
        "Palabra aguda con tilde",
        "Palabra grave sin tilde",
        "Verbo reflexivo con tilde"
    ],
    reglaCorrecta: "Multiple: sentémonos (esdrújula), aquí (aguda), relájate (esdrújula)",
    categoria: "verbos_encliticos",
    nivel: "dificil",
    explicacion: "Los pronombres añadidos pueden crear palabras esdrújulas que necesitan tilde. 'Aquí' es aguda terminada en vocal."
},

// PREGUNTAS Y EXCLAMACIONES
{
    frase: "¿C_mo sabr_ cu_ndo llegar_?",
    palabras: ["cómo", "sabré", "cuándo", "llegará"],
    opciones: [
        ["como", "cómo"],
        ["sabre", "sabré"],
        ["cuando", "cuándo"],
        ["llegara", "llegará"]
    ],
    reglas: [
        "Tilde diacrítica en interrogativos",
        "Palabra aguda en futuro",
        "Palabra grave sin tilde",
        "Tilde en pronombre interrogativo"
    ],
    reglaCorrecta: "Multiple: interrogativos y agudas",
    categoria: "diacritica",
    nivel: "medio",
    explicacion: "'Cómo' y 'cuándo' llevan tilde por ser interrogativos. 'Sabré' y 'llegará' son agudas terminadas en vocal."
},

// SERIES VERBALES
{
    frase: "Est_bamos crey_ndonos que bail_bamos bien",
    palabras: ["estábamos", "creyéndonos", "bailábamos"],
    opciones: [
        ["estabamos", "estábamos"],
        ["creyendonos", "creyéndonos"],
        ["bailabamos", "bailábamos"]
    ],
    reglas: [
        "Palabra esdrújula por conjugación",
        "Verbo con pronombre enclítico",
        "Palabra grave con tilde",
        "Imperfecto de indicativo"
    ],
    reglaCorrecta: "Multiple: todas son esdrújulas",
    categoria: "verbos",
    nivel: "dificil",
    explicacion: "Las formas del imperfecto 'estábamos' y 'bailábamos' son esdrújulas, y 'creyéndonos' se convierte en esdrújula al añadir el pronombre."
},
// COMBINACIONES QUÉ/QUE CON OTROS CASOS
{
    frase: "¿Qu_ te parece si t_ me dices qu_ prefieres t_ o caf_?",
    palabras: ["qué", "tú", "qué", "té", "café"],
    opciones: [
        ["que", "qué"],
        ["tu", "tú"],
        ["que", "qué"],
        ["te", "té"]
    ],
    reglas: [
        "Qué (interrogativo)",
        "Tú (pronombre personal)",
        "Qué (interrogativo indirecto)",
        "Té (bebida)"
    ],
    categoria: "diacritica",
    nivel: "dificil",
    explicacion: "Combina interrogativos con pronombres y sustantivos: 'qué' interrogativo, 'tú' pronombre, 'té' bebida"
},

// CASOS DE SI/SÍ/SE/SÉ
{
    frase: "No s_ si vendr_, pero s_ que _l dir_ que s_",
    palabras: ["sé", "sé", "él", "dirá", "sí"],
    opciones: [
        ["se", "sé"],
        ["se", "sé"],
        ["el", "él"],
        ["dira", "dirá"],
        ["si", "sí"]
    ],
    reglas: [
        "Sé (verbo saber)",
        "Sé (verbo saber)",
        "Él (pronombre)",
        "Dirá (futuro simple)",
        "Sí (afirmación)"
    ],
    categoria: "diacritica",
    nivel: "dificil",
    explicacion: {
        "sé": "Del verbo saber (presente)",
        "él": "Pronombre personal masculino",
        "sí": "Adverbio de afirmación"
    }
},

// MÁS/MAS EN CONTEXTOS COMPLEJOS
{
    frase: "Quer_a m_s tiempo, m_s no pod_a hacer m_s",
    palabras: ["quería", "más", "mas", "podía", "más"],
    opciones: [
        ["mas", "más"],
        ["mas", "más"],
        ["mas", "más"]
    ],
    reglas: [
        "Más (cantidad)",
        "Mas (pero)",
        "Más (cantidad)"
    ],
    categoria: "diacritica",
    nivel: "dificil",
    explicacion: "'Más' indica cantidad o adición, 'mas' equivale a 'pero'. Aquí se usan ambos en la misma frase."
},

// COMBINACIÓN DE PRONOMBRES Y POSESIVOS
{
    frase: "T_ y _l tomarán t_ en mi casa, pero a m_ me gusta m_s el caf_",
    palabras: ["tú", "él", "té", "mí", "más", "café"],
    opciones: [
        ["tu", "tú"],
        ["el", "él"],
        ["te", "té"],
        ["mi", "mí"],
        ["mas", "más"]
    ],
    reglas: [
        "Tú (pronombre personal)",
        "Él (pronombre personal)",
        "Té (sustantivo)",
        "Mí (pronombre con preposición)",
        "Más (cantidad)"
    ],
    categoria: "diacritica",
    nivel: "dificil",
    explicacion: "Ejercicio que combina varios tipos de tilde diacrítica en una misma frase"
},

// INTERROGATIVOS Y EXCLAMATIVOS
{
    frase: "¿Cu_ndo y d_nde? ¡Qu_ s_ yo! ¿Cu_l prefieres?",
    palabras: ["cuándo", "dónde", "qué", "sé", "cuál"],
    opciones: [
        ["cuando", "cuándo"],
        ["donde", "dónde"],
        ["que", "qué"],
        ["se", "sé"],
        ["cual", "cuál"]
    ],
    reglas: [
        "Cuándo (interrogativo)",
        "Dónde (interrogativo)",
        "Qué (exclamativo)",
        "Sé (verbo saber)",
        "Cuál (interrogativo)"
    ],
    categoria: "diacritica",
    nivel: "dificil",
    explicacion: "Todas las palabras interrogativas y exclamativas llevan tilde"
},

// AÚN/AUN EN CONTEXTOS COMPLEJOS
{
    frase: "A_n no ha llegado, a_n sabiendo que a_n tiene tiempo",
    palabras: ["aún", "aun", "aún"],
    opciones: [
        ["aun", "aún"],
        ["aun", "aún"],
        ["aun", "aún"]
    ],
    reglas: [
        "Aún (todavía)",
        "Aun (incluso)",
        "Aún (todavía)"
    ],
    categoria: "diacritica",
    nivel: "dificil",
    explicacion: "'Aún' equivale a 'todavía', mientras que 'aun' equivale a 'incluso' o 'hasta'. En la misma frase se usan ambos significados."
},

// COMBINACIÓN DE TODOS LOS CASOS
{
    frase: "S_ que _l quiere m_s t_, pero a_n no s_ si vendr_ a tom_rselo",
    palabras: ["sé", "él", "más", "té", "aún", "sé", "vendrá", "tomárselo"],
    opciones: [
        ["se", "sé"],
        ["el", "él"],
        ["mas", "más"],
        ["te", "té"],
        ["aun", "aún"],
        ["se", "sé"]
    ],
    reglas: [
        "Sé (verbo saber)",
        "Él (pronombre)",
        "Más (cantidad)",
        "Té (bebida)",
        "Aún (todavía)",
        "Sé (verbo saber)"
    ],
    categoria: "diacritica",
    nivel: "dificil",
    explicacion: "Este ejercicio combina múltiples casos de tilde diacrítica en un contexto complejo"
},

// CASOS DE PORQUÉ/POR QUÉ/PORQUE/POR QUE COMBINADOS
{
    frase: "¿Por qu_ llegaste tarde? Porque s_, ese es el porqu_. Por que lo dec_a el cartel",
    palabras: ["por qué", "porque", "sí", "porqué", "por que", "decía"],
    opciones: [
        ["porque", "por qué"],
        ["por que", "porque"],
        ["si", "sí"],
        ["porque", "porqué"],
        ["porque", "por que"]
    ],
    reglas: [
        "Por qué (pregunta)",
        "Porque (respuesta)",
        "Sí (afirmación)",
        "Porqué (sustantivo)",
        "Por que (por el cual)"
    ],
    categoria: "diacritica",
    nivel: "dificil",
    explicacion: {
        "por qué": "En preguntas directas e indirectas",
        "porque": "Para respuestas y explicaciones",
        "porqué": "Sustantivo (el motivo)",
        "por que": "Equivale a 'por el cual'"
    }
},
// PALABRAS TÉCNICAS Y CIENTÍFICAS
{
    frase: "El term_metro marca el l_mite m_ximo",
    palabras: ["termómetro", "límite", "máximo"],
    opciones: [
        ["termometro", "termómetro"],
        ["limite", "límite"],
        ["maximo", "máximo"]
    ],
    reglas: [
        "Palabra esdrújula compuesta",
        "Palabra esdrújula simple",
        "Palabra grave con tilde",
        "Palabra esdrújula técnica"
    ],
    reglaCorrecta: "Multiple: todas son esdrújulas",
    categoria: "esdrujulas",
    nivel: "medio",
    explicacion: "'Termómetro', 'límite' y 'máximo' son palabras esdrújulas, la primera es compuesta (termo+metro)."
},

// VERBOS CON MÚLTIPLES PRONOMBRES
{
    frase: "Traig_melo y gu_rdeselo ahora",
    palabras: ["tráigamelo", "guárdeselo"],
    opciones: [
        ["traigamelo", "tráigamelo"],
        ["guardeselo", "guárdeselo"]
    ],
    reglas: [
        "Palabra sobreesdrújula con dos pronombres",
        "Palabra esdrújula normal",
        "Verbo con pronombres sin tilde",
        "Palabra grave con pronombres"
    ],
    reglaCorrecta: "Multiple: ambas son sobreesdrújulas",
    categoria: "verbos_encliticos",
    nivel: "dificil",
    explicacion: "Al añadir dos pronombres al verbo, se crean palabras sobreesdrújulas que siempre llevan tilde."
},

// CONTRASTE DE SIGNIFICADOS
{
    frase: "El p_blico aplaudi_ cuando el m_sico toc_",
    palabras: ["público", "aplaudió", "músico", "tocó"],
    opciones: [
        ["publico", "público"],
        ["aplaudio", "aplaudió"],
        ["musico", "músico"],
        ["toco", "tocó"]
    ],
    reglas: [
        "Palabra esdrújula",
        "Palabra aguda con tilde",
        "Palabra grave sin tilde",
        "Palabra aguda terminada en vocal"
    ],
    reglaCorrecta: "Multiple: esdrújulas y agudas",
    categoria: "multiple",
    nivel: "medio",
    explicacion: "'Público' y 'músico' son esdrújulas, mientras que 'aplaudió' y 'tocó' son agudas terminadas en vocal."
},

// PALABRAS CON PREFIJOS
{
    frase: "La pr_rroga del ex_men ser_ autom_tica",
    palabras: ["prórroga", "examen", "será", "automática"],
    opciones: [
        ["prorroga", "prórroga"],
        ["examen", "exámen"],
        ["sera", "será"],
        ["automatica", "automática"]
    ],
    reglas: [
        "Palabra grave con tilde",
        "Palabra grave sin tilde",
        "Palabra aguda con tilde",
        "Palabra esdrújula"
    ],
    reglaCorrecta: "Multiple: prórroga (grave), examen (grave sin tilde), será (aguda), automática (esdrújula)",
    categoria: "multiple",
    nivel: "dificil",
    explicacion: "'Prórroga' es grave terminada en vocal pero lleva tilde, 'examen' es grave terminada en n (sin tilde), 'será' es aguda, y 'automática' es esdrújula."
},
// FORMAS VERBALES COMPLEJAS
{
    frase: "Si me lo prop_siera, podr_a hac_rtelo",
    palabras: ["propusiera", "podría", "hacértelo"],
    opciones: [
        ["propusiera", "propusiéra"],
        ["podria", "podría"],
        ["hacertelo", "hacértelo"]
    ],
    reglas: [
        "Subjuntivo sin tilde",
        "Condicional con tilde",
        "Verbo con doble pronombre",
        "Palabra grave normal"
    ],
    reglaCorrecta: "Multiple: propusiera (sin tilde), podría (hiato), hacértelo (sobresdrújula)",
    categoria: "verbos",
    nivel: "dificil",
    explicacion: "'Propusiera' es forma verbal sin tilde, 'podría' tiene hiato, 'hacértelo' es sobreesdrújula por los pronombres."
},

// USOS PROFESIONALES
{
    frase: "El jur_dico env_o el curr_culum",
    palabras: ["jurídico", "envió", "currículum"],
    opciones: [
        ["juridico", "jurídico"],
        ["envio", "envió"],
        ["curriculum", "currículum"]
    ],
    reglas: [
        "Palabra esdrújula",
        "Palabra aguda con tilde",
        "Palabra llana latina",
        "Palabra grave sin tilde"
    ],
    reglaCorrecta: "Multiple: jurídico (esdrújula), envió (aguda), currículum (esdrújula)",
    categoria: "multiple",
    nivel: "medio",
    explicacion: "Términos profesionales: 'jurídico' es esdrújula, 'envió' es aguda con tilde, 'currículum' mantiene la tilde del latín."
},

// NOMBRES PROPIOS
{
    frase: "R_ul y Mar_a viven en C_rdoba",
    palabras: ["Raúl", "María", "Córdoba"],
    opciones: [
        ["Raul", "Raúl"],
        ["Maria", "María"],
        ["Cordoba", "Córdoba"]
    ],
    reglas: [
        "Nombre agudo con tilde",
        "Hiato con tilde",
        "Palabra esdrújula",
        "Nombre propio sin tilde"
    ],
    reglaCorrecta: "Multiple: Raúl (aguda), María (hiato), Córdoba (esdrújula)",
    categoria: "nombres_propios",
    nivel: "medio",
    explicacion: "Los nombres propios siguen las mismas reglas: 'Raúl' es aguda, 'María' tiene hiato, 'Córdoba' es esdrújula."
},

// GENTILICIOS Y GEOGRAFÍA
{
    frase: "El portugu_s viaj_ a M_xico en avi_n",
    palabras: ["portugués", "viajó", "México", "avión"],
    opciones: [
        ["portugues", "portugués"],
        ["viajo", "viajó"],
        ["Mexico", "México"],
        ["avion", "avión"]
    ],
    reglas: [
        "Gentilicio agudo",
        "Verbo agudo con tilde",
        "Nombre propio esdrújulo",
        "Palabra aguda en n"
    ],
    reglaCorrecta: "Multiple: portugués y avión (agudas en -s/-n), viajó (aguda), México (esdrújula)",
    categoria: "multiple",
    nivel: "medio",
    explicacion: "Mezcla de reglas: gentilicio agudo ('portugués'), verbo ('viajó'), nombre propio ('México') y sustantivo ('avión')."
},

// TIEMPOS VERBALES MEZCLADOS
{
    frase: "¿Cu_ndo llegu_, qu_ hacer_amos?",
    palabras: ["cuándo", "llegué", "qué", "haríamos"],
    opciones: [
        ["cuando", "cuándo"],
        ["llegue", "llegué"],
        ["que", "qué"],
        ["hariamos", "haríamos"]
    ],
    reglas: [
        "Interrogativo con tilde",
        "Pretérito perfecto simple",
        "Condicional simple",
        "Palabra esdrújula"
    ],
    reglaCorrecta: "Multiple: interrogativos y verbos conjugados",
    categoria: "verbos",
    nivel: "dificil",
    explicacion: "'Cuándo' y 'qué' son interrogativos, 'llegué' es aguda, 'haríamos' tiene hiato."
},

// FAMILIAS DE PALABRAS
{
    frase: "El m_todo matem_tico result_ pr_ctico",
    palabras: ["método", "matemático", "resultó", "práctico"],
    opciones: [
        ["metodo", "método"],
        ["matematico", "matemático"],
        ["resulto", "resultó"],
        ["practico", "práctico"]
    ],
    reglas: [
        "Palabra esdrújula",
        "Palabra proparoxítona",
        "Palabra aguda con tilde",
        "Palabra grave con tilde"
    ],
    reglaCorrecta: "Multiple: método y matemático (esdrújulas), resultó (aguda), práctico (grave)",
    categoria: "multiple",
    nivel: "medio",
    explicacion: "Familia académica: 'método' y 'matemático' son esdrújulas, 'resultó' es aguda, 'práctico' es grave con tilde."
},

// ADVERBIOS Y PREPOSICIONES
{
    frase: "Quiz_s vendr_ despu_s de ma_ana",
    palabras: ["quizás", "vendrá", "después", "mañana"],
    opciones: [
        ["quizas", "quizás"],
        ["vendra", "vendrá"],
        ["despues", "después"],
        ["manana", "mañana"]
    ],
    reglas: [
        "Adverbio agudo",
        "Verbo en futuro",
        "Palabra aguda en s",
        "Palabra grave sin tilde"
    ],
    reglaCorrecta: "Multiple: varios tipos de palabras agudas y una grave",
    categoria: "multiple",
    nivel: "medio",
    explicacion: "'Quizás' y 'después' son agudas terminadas en -s, 'vendrá' es futuro agudo, 'mañana' es grave sin tilde."
},
// PALABRAS COMPUESTAS COMPLEJAS
{
    frase: "El hist_rico-art_stico y socioecon_mico",
    palabras: ["histórico", "artístico", "socioeconómico"],
    opciones: [
        ["historico-artistico", "histórico-artístico"],
        ["socioeconomico", "socioeconómico"]
    ],
    reglas: [
        "Palabras compuestas con guion mantienen tildes",
        "Palabra compuesta forma nueva esdrújula",
        "Palabra grave sin tilde",
        "Palabra compuesta pierde tildes"
    ],
    reglaCorrecta: "Multiple: compuestas mantienen tilde original",
    categoria: "compuestas",
    nivel: "dificil",
    explicacion: "En 'histórico-artístico' cada palabra mantiene su tilde. En 'socioeconómico' se forma una nueva palabra esdrújula."
},

// EXPRESIONES TEMPORALES
{
    frase: "A_n no s_ cu_ndo ser_ el pr_ximo d_a",
    palabras: ["aún", "sé", "cuándo", "será", "próximo", "día"],
    opciones: [
        ["aun", "aún"],
        ["se", "sé"],
        ["cuando", "cuándo"],
        ["sera", "será"],
        ["proximo", "próximo"],
        ["dia", "día"]
    ],
    reglas: [
        "Tilde diacrítica",
        "Interrogativo indirecto",
        "Palabra aguda",
        "Palabra esdrújula"
    ],
    reglaCorrecta: "Multiple: varios tipos de tilde",
    categoria: "multiple",
    nivel: "dificil",
    explicacion: "'Aún' (todavía) y 'sé' llevan tilde diacrítica, 'cuándo' es interrogativo indirecto, 'será' es aguda, 'próximo' es esdrújula, 'día' tiene hiato."
},

// TÉRMINOS CIENTÍFICOS
{
    frase: "El par_metro del tri_ngulo isosc_les",
    palabras: ["parámetro", "triángulo", "isósceles"],
    opciones: [
        ["parametro", "parámetro"],
        ["triangulo", "triángulo"],
        ["isosceles", "isósceles"]
    ],
    reglas: [
        "Palabra esdrújula griega",
        "Palabra esdrújula con hiato",
        "Palabra grave con tilde",
        "Palabra grave sin tilde"
    ],
    reglaCorrecta: "Multiple: todas son esdrújulas de origen griego",
    categoria: "esdrujulas",
    nivel: "dificil",
    explicacion: "Términos matemáticos: 'parámetro', 'triángulo' e 'isósceles' son esdrújulas, algunas conservadas del griego."
},

// CONJUGACIONES VERBALES COMPLEJAS
{
    frase: "Si me lo explic_seis, os entender_amos",
    palabras: ["explicáseis", "entenderíamos"],
    opciones: [
        ["explicaseis", "explicáseis"],
        ["entenderiamos", "entenderíamos"]
    ],
    reglas: [
        "Subjuntivo con tilde",
        "Condicional con hiato",
        "Palabra llana sin tilde",
        "Palabra esdrújula"
    ],
    reglaCorrecta: "Multiple: formas verbales con tilde",
    categoria: "verbos",
    nivel: "dificil",
    explicacion: "'Explicáseis' (subjuntivo) y 'entenderíamos' (condicional) llevan tilde por ser formas verbales esdrújulas o contener hiatos."
},

// SUPERLATIVOS Y COMPARATIVOS
{
    frase: "Es fort_simo y rap_dísimo, pero p_simo",
    palabras: ["fortísimo", "rapidísimo", "pésimo"],
    opciones: [
        ["fortisimo", "fortísimo"],
        ["rapidisimo", "rapidísimo"],
        ["pesimo", "pésimo"]
    ],
    reglas: [
        "Superlativo siempre esdrújulo",
        "Palabra derivada con tilde",
        "Palabra esdrújula simple",
        "Palabra grave con tilde"
    ],
    reglaCorrecta: "Multiple: todas son esdrújulas",
    categoria: "esdrujulas",
    nivel: "medio",
    explicacion: "Los superlativos en -ísimo son siempre esdrújulos ('fortísimo', 'rapidísimo'), y 'pésimo' es esdrújula por sí misma."
},

// PALABRAS CON PREFIJOS
{
    frase: "El ultrason_grafo sub_cutico es aut_ntico",
    palabras: ["ultrasonógrafo", "subácutico", "auténtico"],
    opciones: [
        ["ultrasonografo", "ultrasonógrafo"],
        ["subacutico", "subácutico"],
        ["autentico", "auténtico"]
    ],
    reglas: [
        "Palabra compuesta con prefijo",
        "Palabra esdrújula con prefijo",
        "Palabra grave con tilde",
        "Palabra simple sin tilde"
    ],
    reglaCorrecta: "Multiple: esdrújulas con prefijos",
    categoria: "compuestas",
    nivel: "dificil",
    explicacion: "Los prefijos no alteran las reglas de acentuación: 'ultrasonógrafo' y 'subácutico' son esdrújulas compuestas, 'auténtico' es simple."
},

// LATINISMOS Y EXTRANJERISMOS ADAPTADOS
{
    frase: "El h_bitat del c_ncer es ac_atico",
    palabras: ["hábitat", "cáncer", "acuático"],
    opciones: [
        ["habitat", "hábitat"],
        ["cancer", "cáncer"],
        ["acuatico", "acuático"]
    ],
    reglas: [
        "Latinismo adaptado",
        "Palabra grave con tilde",
        "Palabra proparoxítona",
        "Palabra con hiato"
    ],
    reglaCorrecta: "Multiple: graves con tilde y proparoxítona",
    categoria: "multiple",
    nivel: "dificil",
    explicacion: "'Hábitat' y 'cáncer' son graves terminadas en consonante (llevan tilde), 'acuático' tiene hiato."
},
// TÉRMINOS ACADÉMICOS
{
    frase: "El m_todo cient_fico requiere an_lisis sistem_tico",
    palabras: ["método", "científico", "análisis", "sistemático"],
    opciones: [
        ["metodo", "método"],
        ["cientifico", "científico"],
        ["analisis", "análisis"],
        ["sistematico", "sistemático"]
    ],
    reglas: [
        "Palabra esdrújula",
        "Palabra esdrújula",
        "Palabra grave con hiato",
        "Palabra esdrújula"
    ],
    categoria: "academico",
    nivel: "medio",
    explicacion: "Términos académicos comunes: todas son palabras esdrújulas excepto 'análisis' que es grave con hiato"
},

// TÉRMINOS MÉDICOS
{
    frase: "El diagn_stico del pat_logo fue r_pido y pr_ctico",
    palabras: ["diagnóstico", "patólogo", "rápido", "práctico"],
    opciones: [
        ["diagnostico", "diagnóstico"],
        ["patologo", "patólogo"],
        ["rapido", "rápido"],
        ["practico", "práctico"]
    ],
    reglas: [
        "Palabra esdrújula",
        "Palabra esdrújula",
        "Palabra grave con tilde",
        "Palabra grave con tilde"
    ],
    categoria: "medicina",
    nivel: "medio",
    explicacion: "Vocabulario médico común que requiere tilde"
},

// TÉRMINOS LEGALES
{
    frase: "El jur_dico present_ el doc_mento p_blico",
    palabras: ["jurídico", "presentó", "documento", "público"],
    opciones: [
        ["juridico", "jurídico"],
        ["presento", "presentó"],
        ["documento", "documénto"],
        ["publico", "público"]
    ],
    reglas: [
        "Palabra esdrújula",
        "Palabra aguda con tilde",
        "Palabra grave sin tilde",
        "Palabra esdrújula"
    ],
    categoria: "legal",
    nivel: "medio",
    explicacion: "Terminología legal común con diferentes reglas de acentuación"
},

// TÉRMINOS TECNOLÓGICOS
{
    frase: "El inform_tico config_r_ el tel_fono m_vil",
    palabras: ["informático", "configuró", "teléfono", "móvil"],
    opciones: [
        ["informatico", "informático"],
        ["configuro", "configuró"],
        ["telefono", "teléfono"],
        ["movil", "móvil"]
    ],
    reglas: [
        "Palabra esdrújula",
        "Palabra aguda con tilde",
        "Palabra esdrújula",
        "Palabra grave con tilde"
    ],
    categoria: "tecnologia",
    nivel: "medio",
    explicacion: "Vocabulario tecnológico moderno con diferentes tipos de acentuación"
},

// TÉRMINOS ECONÓMICOS
{
    frase: "El cr_dito hipot_cario gener_ inter_s",
    palabras: ["crédito", "hipotecario", "generó", "interés"],
    opciones: [
        ["credito", "crédito"],
        ["hipotecario", "hipotécario"],
        ["genero", "generó"],
        ["interes", "interés"]
    ],
    reglas: [
        "Palabra esdrújula",
        "Palabra grave sin tilde",
        "Palabra aguda con tilde",
        "Palabra aguda con tilde"
    ],
    categoria: "economia",
    nivel: "medio",
    explicacion: "Términos financieros comunes y sus reglas de acentuación"
},

// TÉRMINOS CIENTÍFICOS
{
    frase: "El ge_logo estudi_ los f_siles atmosf_ricos",
    palabras: ["geólogo", "estudió", "fósiles", "atmosféricos"],
    opciones: [
        ["geologo", "geólogo"],
        ["estudio", "estudió"],
        ["fosiles", "fósiles"],
        ["atmosfericos", "atmosféricos"]
    ],
    reglas: [
        "Palabra esdrújula",
        "Palabra aguda con tilde",
        "Palabra esdrújula",
        "Palabra esdrújula"
    ],
    categoria: "ciencia",
    nivel: "dificil",
    explicacion: "Vocabulario científico especializado con énfasis en palabras esdrújulas"
},

// TÉRMINOS EDUCATIVOS
{
    frase: "El pedag_gico m_todo did_ctico result_ pr_ctico",
    palabras: ["pedagógico", "método", "didáctico", "resultó", "práctico"],
    opciones: [
        ["pedagogico", "pedagógico"],
        ["metodo", "método"],
        ["didactico", "didáctico"],
        ["resulto", "resultó"],
        ["practico", "práctico"]
    ],
    reglas: [
        "Palabra esdrújula",
        "Palabra esdrújula",
        "Palabra esdrújula",
        "Palabra aguda con tilde",
        "Palabra grave con tilde"
    ],
    categoria: "educacion",
    nivel: "dificil",
    explicacion: "Términos educativos especializados con diferentes patrones de acentuación"
},

// TÉRMINOS FILOSÓFICOS
{
    frase: "El fil_sofo analiz_ la _tica sist_mica",
    palabras: ["filósofo", "analizó", "ética", "sistémica"],
    opciones: [
        ["filosofo", "filósofo"],
        ["analizo", "analizó"],
        ["etica", "ética"],
        ["sistemica", "sistémica"]
    ],
    reglas: [
        "Palabra esdrújula",
        "Palabra aguda con tilde",
        "Palabra esdrújula",
        "Palabra esdrújula"
    ],
    categoria: "filosofia",
    nivel: "medio",
    explicacion: "Vocabulario filosófico común con énfasis en palabras esdrújulas"
},

// TÉRMINOS ADMINISTRATIVOS
{
    frase: "El tr_mite burocr_tico necesit_ r_pida gesti_n",
    palabras: ["trámite", "burocrático", "necesitó", "rápida", "gestión"],
    opciones: [
        ["tramite", "trámite"],
        ["burocratico", "burocrático"],
        ["necesito", "necesitó"],
        ["rapida", "rápida"],
        ["gestion", "gestión"]
    ],
    reglas: [
        "Palabra esdrújula",
        "Palabra esdrújula",
        "Palabra aguda con tilde",
        "Palabra esdrújula",
        "Palabra aguda con tilde"
    ],
    categoria: "administrativo",
    nivel: "dificil",
    explicacion: "Términos administrativos comunes con variedad de reglas de acentuación"
},

// TÉRMINOS PSICOLÓGICOS
{
    frase: "El psic_logo analiz_ el tr_nsito ps_quico",
    palabras: ["psicólogo", "analizó", "tránsito", "psíquico"],
    opciones: [
        ["psicologo", "psicólogo"],
        ["analizo", "analizó"],
        ["transito", "tránsito"],
        ["psiquico", "psíquico"]
    ],
    reglas: [
        "Palabra esdrújula",
        "Palabra aguda con tilde",
        "Palabra esdrújula",
        "Palabra esdrújula"
    ],
    categoria: "psicologia",
    nivel: "dificil",
    explicacion: "Terminología psicológica especializada con diferentes patrones de acentuación"
}
];
export default ejercicios;