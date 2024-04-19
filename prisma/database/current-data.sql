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
    alamat text NOT NULL,
    email text NOT NULL,
    no_telp text NOT NULL,
    tanggal_lahir date DEFAULT CURRENT_TIMESTAMP,
    foto_profile bytea,
    gaji_pokok double precision NOT NULL,
    tunjangan double precision NOT NULL,
    potongan_gaji double precision NOT NULL,
    kehadiran integer NOT NULL,
    cuti integer NOT NULL,
    jabatan text
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
1	admin	admin
\.


--
-- Data for Name: Fasilitas; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Fasilitas" (id, nama, potongan_biaya) FROM stdin;
2	kendaraan	100000
3	bpjs	200000
\.


--
-- Data for Name: Pegawai; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Pegawai" (id, nama, alamat, email, no_telp, tanggal_lahir, foto_profile, gaji_pokok, tunjangan, potongan_gaji, kehadiran, cuti, jabatan) FROM stdin;
1	suparman	semarang	suparman@test.com	0823845738293	2000-03-01	\N	4000000	2000000	200000	20	0	junior
3	anggi	tasik	anggi@test.com	08423793413	2002-03-05	\N	1000000	0	0	18	2	magang
2	suprianto	ungaran	suprianto@test.com	08574357283942	1999-04-23	\N	5000000	2500000	200000	20	0	manager
\.


--
-- Data for Name: _FasilitasToPegawai; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."_FasilitasToPegawai" ("A", "B") FROM stdin;
2	1
\.


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
e7505e15-f2a3-4f01-b745-10c6f5b0ef8f	0c39e339e44e8fac8f14e60fbecf5a4d85c6a0b89fa62aaa1d2b40c54a8aa73e	2024-04-18 21:03:49.079133+07	20240418140348_dev	\N	\N	2024-04-18 21:03:49.000336+07	1
06e1e88b-a273-4d69-9a12-4ed8daa36aa2	d78f2a1c6f28982ba55dd220765680f2ce3b6405eb3049a22d1cce09da4d734e	2024-04-18 21:23:45.987892+07	20240418142345_init	\N	\N	2024-04-18 21:23:45.962186+07	1
5fb724ea-fb45-4a4f-8e90-3ef14a02a40e	3b9647874d19e63780a04d01f3f32dd3525a31f87eae953c2a247d57826adcea	2024-04-18 23:50:59.628861+07	20240418165059_dev	\N	\N	2024-04-18 23:50:59.306553+07	1
508f9c6b-dbac-434e-b608-aebdb0902cdb	7f58e6c57a48fba0c5ce2c09a7626cb651444e1274c8e51d00c32f80b9bb672e	2024-04-18 23:58:06.541612+07	20240418165806_dev	\N	\N	2024-04-18 23:58:06.52431+07	1
\.


--
-- Name: Admin_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Admin_id_seq"', 1, true);


--
-- Name: Fasilitas_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Fasilitas_id_seq"', 3, true);


--
-- Name: Pegawai_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Pegawai_id_seq"', 3, true);


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

