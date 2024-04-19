--
-- PostgreSQL database dump
--

-- Dumped from database version 16.2
-- Dumped by pg_dump version 16.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: public; Type: SCHEMA; Schema: -; Owner: postgres
--

-- *not* creating schema, since initdb creates it


ALTER SCHEMA public OWNER TO postgres;

--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON SCHEMA public IS '';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Admin; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Admin" (
    id integer NOT NULL,
    username text NOT NULL,
    password text NOT NULL
);


ALTER TABLE public."Admin" OWNER TO postgres;

--
-- Name: Admin_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Admin_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Admin_id_seq" OWNER TO postgres;

--
-- Name: Admin_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Admin_id_seq" OWNED BY public."Admin".id;


--
-- Name: Fasilitas; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Fasilitas" (
    id integer NOT NULL,
    nama text NOT NULL,
    potongan_biaya double precision NOT NULL
);


ALTER TABLE public."Fasilitas" OWNER TO postgres;

--
-- Name: Fasilitas_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Fasilitas_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Fasilitas_id_seq" OWNER TO postgres;

--
-- Name: Fasilitas_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Fasilitas_id_seq" OWNED BY public."Fasilitas".id;


--
-- Name: Pegawai; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Pegawai" (
    id integer NOT NULL,
    nama text NOT NULL,
    gender text,
    alamat text NOT NULL,
    email text NOT NULL,
    no_telp text NOT NULL,
    jabatan text,
    tanggal_lahir date DEFAULT CURRENT_TIMESTAMP,
    foto_profile bytea,
    status text NOT NULL,
    tanggal_masuk date DEFAULT CURRENT_TIMESTAMP NOT NULL,
    gaji_pokok double precision NOT NULL,
    tunjangan double precision NOT NULL,
    potongan_gaji double precision NOT NULL,
    kehadiran integer NOT NULL,
    cuti integer NOT NULL
);


ALTER TABLE public."Pegawai" OWNER TO postgres;

--
-- Name: Pegawai_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Pegawai_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Pegawai_id_seq" OWNER TO postgres;

--
-- Name: Pegawai_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Pegawai_id_seq" OWNED BY public."Pegawai".id;


--
-- Name: _FasilitasToPegawai; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."_FasilitasToPegawai" (
    "A" integer NOT NULL,
    "B" integer NOT NULL
);


ALTER TABLE public."_FasilitasToPegawai" OWNER TO postgres;

--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO postgres;

--
-- Name: Admin id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Admin" ALTER COLUMN id SET DEFAULT nextval('public."Admin_id_seq"'::regclass);


--
-- Name: Fasilitas id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Fasilitas" ALTER COLUMN id SET DEFAULT nextval('public."Fasilitas_id_seq"'::regclass);


--
-- Name: Pegawai id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Pegawai" ALTER COLUMN id SET DEFAULT nextval('public."Pegawai_id_seq"'::regclass);


--
-- Data for Name: Admin; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Admin" (id, username, password) FROM stdin;
1	admin	
\.


--
-- Data for Name: Fasilitas; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Fasilitas" (id, nama, potongan_biaya) FROM stdin;
1	BPJS	200000
\.


--
-- Data for Name: Pegawai; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Pegawai" (id, nama, gender, alamat, email, no_telp, jabatan, tanggal_lahir, foto_profile, status, tanggal_masuk, gaji_pokok, tunjangan, potongan_gaji, kehadiran, cuti) FROM stdin;
1	suparman	laki-laki	semarang	suparman@test.com	084375842349	manager	\N	\N	aktif	2023-01-01	5000000	2500000	200000	20	0
2	anggi	laki-laki	ungaran	anggi@test.com	085429575843	junior	2024-04-19	\N	cuti	2024-04-19	3000000	1000000	200000	19	1
3	risa	perempuan	bekasi	risa@test.com	089576432389	senior	2024-04-19	\N	tidak aktif	2024-04-19	4000000	3000000	300000	20	0
4	deni	laki-laki	jakarta barant	deni@test.com	098521343213	magang	2024-04-19	\N	aktif	2024-04-19	1000000	50000	0	20	0
\.


--
-- Data for Name: _FasilitasToPegawai; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."_FasilitasToPegawai" ("A", "B") FROM stdin;
1	1
1	2
1	3
\.


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
6bc6e17e-edbb-425b-b86f-49dda80b4053	9fcd18d99bb387dc642658f4b9142d30c6c20121e7e0f4aaf889f50da5a19f06	2024-04-19 15:19:49.638773+07	20240419081949_dev	\N	\N	2024-04-19 15:19:49.541255+07	1
\.


--
-- Name: Admin_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Admin_id_seq"', 1, true);


--
-- Name: Fasilitas_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Fasilitas_id_seq"', 1, true);


--
-- Name: Pegawai_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Pegawai_id_seq"', 4, true);


--
-- Name: Admin Admin_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Admin"
    ADD CONSTRAINT "Admin_pkey" PRIMARY KEY (id);


--
-- Name: Fasilitas Fasilitas_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Fasilitas"
    ADD CONSTRAINT "Fasilitas_pkey" PRIMARY KEY (id);


--
-- Name: Pegawai Pegawai_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Pegawai"
    ADD CONSTRAINT "Pegawai_pkey" PRIMARY KEY (id);


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: Admin_username_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "Admin_username_key" ON public."Admin" USING btree (username);


--
-- Name: Pegawai_email_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "Pegawai_email_key" ON public."Pegawai" USING btree (email);


--
-- Name: _FasilitasToPegawai_AB_unique; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "_FasilitasToPegawai_AB_unique" ON public."_FasilitasToPegawai" USING btree ("A", "B");


--
-- Name: _FasilitasToPegawai_B_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "_FasilitasToPegawai_B_index" ON public."_FasilitasToPegawai" USING btree ("B");


--
-- Name: _FasilitasToPegawai _FasilitasToPegawai_A_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."_FasilitasToPegawai"
    ADD CONSTRAINT "_FasilitasToPegawai_A_fkey" FOREIGN KEY ("A") REFERENCES public."Fasilitas"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _FasilitasToPegawai _FasilitasToPegawai_B_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."_FasilitasToPegawai"
    ADD CONSTRAINT "_FasilitasToPegawai_B_fkey" FOREIGN KEY ("B") REFERENCES public."Pegawai"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE USAGE ON SCHEMA public FROM PUBLIC;


--
-- PostgreSQL database dump complete
--

