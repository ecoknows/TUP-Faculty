import bcrypt from 'bcryptjs';


const user = [
    {
        id_number:'1234',
        name: 'Admin',
        department: 'TUP',

        username:'admin',
        password:bcrypt.hashSync("1234", 8),
        is_admin: true,
    },
    {
        id_number:'1234',
        
        username:"PERAGRINO",
        password:bcrypt.hashSync("AMADOR", 8),

        name:"PERAGRINO B. AMADOR, JR",
        department: "Computer Studies",

        date_time_in:'',
        time_in: '',
        time_out: '',
        is_admin: false,
    },
    {
        id_number:'1234',
        username:"FRANCIS",
        password:bcrypt.hashSync("DELACRUZ", 8),

        name:"FRANCIS L. DELA CRUZ",
        department: "Computer Studies",

        date_time_in:'',
        time_in: '',
        time_out: '',
        is_admin: false,
    },
    {
        id_number:'1234',
        username:"MARIACARMELA",
        password:bcrypt.hashSync("FRANCISCO", 8),

        name:"MARIA CARMELA F. FRANCISCO",
        department: "Computer Studies",

        date_time_in:'',
        time_in: '',
        time_out: '',
        is_admin: false,
    },
    {
        id_number:'1234',
        username:"FRANCIS",
        password:bcrypt.hashSync("DELACRUZ", 8),

        name:"FRANCIS L. DELA CRUZ ",
        department: "Computer Studies",

        date_time_in:'',
        time_in: '',
        time_out: '',
        is_admin: false,
    },
    {
        id_number:'1234',
        username:"MAY",
        password:bcrypt.hashSync("GARCIA", 8),

        name:"MAY M. GARCIA",
        department: "Computer Studies",

        date_time_in:'',
        time_in: '',
        time_out: '',
        is_admin: false,
    },
    {
        id_number:'1234',
        username:"WELLANIE",
        password:bcrypt.hashSync("MOLINO", 8),

        name:"WELANNIE M. MOLINO",
        department: "Computer Studies",

        date_time_in:'',
        time_in: '',
        time_out: '',
        is_admin: false,
    },
    {
        id_number:'1234',
        username:"MAY",
        password:bcrypt.hashSync("GARCIA", 8),

        name:"MAY M. GARCIA",
        department: "Computer Studies",

        date_time_in:'',
        time_in: '',
        time_out: '',
        is_admin: false,
    },
    {
        id_number:'1234',
        username:"DOLORES",
        password:bcrypt.hashSync("MONTESINES", 8),

        name:"DOLORES MONTESINES",
        department: "Computer Studies",

        date_time_in:'',
        time_in: '',
        time_out: '',
        is_admin: false,
    },
    {
        id_number:'1234',
        username:"DARWIN",
        password:bcrypt.hashSync("VARGAS", 8),

        name:"DARWIN C. VARGAS",
        department: "Computer Studies",

        date_time_in:'',
        time_in: '',
        time_out: '',
        is_admin: false,
    },
    {
        id_number:'1234',
        username:"DOLORES",
        password:bcrypt.hashSync("MONTESINES", 8),

        name:"DOLORES MONTESINES",
        department: "Computer Studies",

        date_time_in:'',
        time_in: '',
        time_out: '',
        is_admin: false,
    },
    {
        id_number:'1234',
        username:"FERNANDO",
        password:bcrypt.hashSync("RENEGADO", 8),

        name:"FERNANDO L. RENEGADO",
        department: "Computer Studies",

        date_time_in:'',
        time_in: '',
        time_out: '',
        is_admin: false,
    },
    {
        id_number:'1234',
        username:"ELANIE",
        password:bcrypt.hashSync("VIZCONDE", 8),

        name:"ELANIE J. VIZCONDE",
        department: "Computer Studies",

        date_time_in:'',
        time_in: '',
        time_out: '',
        is_admin: false,
    },
    {
        id_number:'1234',
        username:"FRANCIS",
        password:bcrypt.hashSync("ALFARO", 8),

        name:"FRANCIS A. ALFARO",
        department: "Computer Studies",

        date_time_in:'',
        time_in: '',
        time_out: '',
        is_admin: false,
    },
    {
        id_number:'1234',
        username:"MARITES",
        password:bcrypt.hashSync("BOLANOS", 8),

        name:"MARITES BOLAÑOS",
        department: "Computer Studies",

        date_time_in:'',
        time_in: '',
        time_out: '',
        is_admin: false,
    },
    {
        id_number:'1234',
        username:"IAN",
        password:bcrypt.hashSync("DELOSTRINOS", 8),

        name:"MA. IAN P. DE LOS TRINOS ",
        department: "Computer Studies",

        date_time_in:'',
        time_in: '',
        time_out: '',
        is_admin: false,
    },
    {
        id_number:'1234',
        username:"VICENTE",
        password:bcrypt.hashSync("ESTEMBER", 8),

        name:"VICENTE ESTEMBER",
        department: "Computer Studies",

        date_time_in:'',
        time_in: '',
        time_out: '',
        is_admin: false,
    },
    {
        id_number:'1234',
        username:"JAN",
        password:bcrypt.hashSync("LEE", 8),

        name:"JAN EILBERT L. LEE",
        department: "Computer Studies",

        date_time_in:'',
        time_in: '',
        time_out: '',
        is_admin: false,
    },
    {
        id_number:'1234',
        username:"MELBERN",
        password:bcrypt.hashSync("MALTEZO", 8),

        name:"MELBERN ROSE C. MALTEZO ",
        department: "Computer Studies",

        date_time_in:'',
        time_in: '',
        time_out: '',
        is_admin: false,
    },
    {
        id_number:'1234',
        username:"JULIUS",
        password:bcrypt.hashSync("SARENO", 8),

        name:"JULIUS C. SARENO ",
        department: "Computer Studies",

        date_time_in:'',
        time_in: '',
        time_out: '',
        is_admin: false,
    },
    {
        id_number:'1234',
        username:"MIDETH",
        password:bcrypt.hashSync("ABISADO", 8),

        name:"MIDETH ABISADO",
        department: "Computer Studies",

        date_time_in:'',
        time_in: '',
        time_out: '',
        is_admin: false,
    },
    {
        id_number:'1234',
        username:"CARLO",
        password:bcrypt.hashSync("GODOY", 8),

        name:"CARLO GODOY JR.",
        department: "Computer Studies",

        date_time_in:'',
        time_in: '',
        time_out: '',
        is_admin: false,
    },
    {
        id_number:'1234',
        username:"MARK",
        password:bcrypt.hashSync("MACARANAS", 8),

        name:"MARK ANTHONY MACARANAS",
        department: "Computer Studies",

        date_time_in:'',
        time_in: '',
        time_out: '',
        is_admin: false,
    },
    {
        id_number:'1234',
        username:"FERMIN",
        password:bcrypt.hashSync("MISSION", 8),

        name:"FERMIN G. MISSION, JR.",
        department: "Computer Studies",

        date_time_in:'',
        time_in: '',
        time_out: '',
        is_admin: false,
    },
    {
        id_number:'1234',
        username:"AMANDA",
        password:bcrypt.hashSync("MENTA", 8),

        name:"AMANDA JANE C. MENTA",
        department: "Computer Studies",

        date_time_in:'',
        time_in: '',
        time_out: '',
        is_admin: false,
    },
    {
        id_number:'1234',
        username:"KRISTINE",
        password:bcrypt.hashSync("REYES", 8),

        name:"KRISTINE BUENA CHARMAIGNE REYES",
        department: "Computer Studies",

        date_time_in:'',
        time_in: '',
        time_out: '',
        is_admin: false,
    },
    {
        id_number:'1234',
        username:"GABRIEL",
        password:bcrypt.hashSync("SAMPEDRO", 8),

        name:"GABRIEL AVELINO SAMPEDRO",
        department: "Computer Studies",

        date_time_in:'',
        time_in: '',
        time_out: '',
        is_admin: false,
    },
    {
        id_number:'1234',
        username:"KEN",
        password:bcrypt.hashSync("TARNATE", 8),

        name:"KEN JON N. TARNATE",
        department: "Computer Studies",

        date_time_in:'',
        time_in: '',
        time_out: '',
        is_admin: false,
    },
    {
        id_number:'1234',
        username:"ARIEL",
        password:bcrypt.hashSync("TOMAGAN", 8),

        name:"ARIEL L. TOMAGAN",
        department: "Computer Studies",

        date_time_in:'',
        time_in: '',
        time_out: '',
        is_admin: false,
    },
    {
        id_number:'1234',
        username:"DANNY",
        password:bcrypt.hashSync("UMUSO", 8),

        name:"DANNY UMOSO",
        department: "Computer Studies",

        date_time_in:'',
        time_in: '',
        time_out: '',
        is_admin: false,
    },
]
export default user;