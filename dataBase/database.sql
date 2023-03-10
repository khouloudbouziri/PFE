PGDMP     !            
        {            GestionDesStages    15.2    15.2 /    7           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            8           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            9           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            :           1262    17423    GestionDesStages    DATABASE     ?   CREATE DATABASE "GestionDesStages" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'French_France.1252';
 "   DROP DATABASE "GestionDesStages";
                postgres    false            ?            1259    17694    administrator    TABLE     B  CREATE TABLE public.administrator (
    id bigint NOT NULL,
    adress character varying(255),
    email character varying(255),
    firstname character varying(255),
    lastname character varying(255),
    password character varying(255),
    phone_number character varying(255),
    photo_url character varying(255)
);
 !   DROP TABLE public.administrator;
       public         heap    postgres    false            ?            1259    17736    company    TABLE       CREATE TABLE public.company (
    id bigint NOT NULL,
    adress character varying(255),
    email character varying(255),
    firstname character varying(255),
    lastname character varying(255),
    password character varying(255),
    phone_number character varying(255),
    photo_url character varying(255),
    company_name character varying(255),
    domain character varying(255),
    logo_url character varying(255),
    sector character varying(255),
    size bigint NOT NULL,
    tax_registration_number character varying(255)
);
    DROP TABLE public.company;
       public         heap    postgres    false            ?            1259    17701    company_department    TABLE     ?   CREATE TABLE public.company_department (
    id_company_department bigint NOT NULL,
    wording character varying(255),
    company bytea
);
 &   DROP TABLE public.company_department;
       public         heap    postgres    false            ?            1259    17671    company_department_seq    SEQUENCE     ?   CREATE SEQUENCE public.company_department_seq
    START WITH 1
    INCREMENT BY 50
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.company_department_seq;
       public          postgres    false            ?            1259    17564    deps_seq    SEQUENCE     r   CREATE SEQUENCE public.deps_seq
    START WITH 1
    INCREMENT BY 50
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
    DROP SEQUENCE public.deps_seq;
       public          postgres    false            ?            1259    17565    dept_seq    SEQUENCE     r   CREATE SEQUENCE public.dept_seq
    START WITH 1
    INCREMENT BY 50
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
    DROP SEQUENCE public.dept_seq;
       public          postgres    false            ?            1259    17566    etablissement_seq    SEQUENCE     {   CREATE SEQUENCE public.etablissement_seq
    START WITH 1
    INCREMENT BY 50
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.etablissement_seq;
       public          postgres    false            ?            1259    17706    intern    TABLE     ?  CREATE TABLE public.intern (
    id bigint NOT NULL,
    adress character varying(255),
    email character varying(255),
    firstname character varying(255),
    lastname character varying(255),
    password character varying(255),
    phone_number character varying(255),
    photo_url character varying(255),
    cv_url character varying(255),
    linkedin_url character varying(255),
    university bytea
);
    DROP TABLE public.intern;
       public         heap    postgres    false            ?            1259    17567    reunion_seq    SEQUENCE     u   CREATE SEQUENCE public.reunion_seq
    START WITH 1
    INCREMENT BY 50
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.reunion_seq;
       public          postgres    false            ?            1259    17568 	   stage_seq    SEQUENCE     s   CREATE SEQUENCE public.stage_seq
    START WITH 1
    INCREMENT BY 50
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
     DROP SEQUENCE public.stage_seq;
       public          postgres    false            ?            1259    17713 
   university    TABLE     $  CREATE TABLE public.university (
    id_university bigint NOT NULL,
    university_adress character varying(255),
    university_fax character varying(255),
    university_mail character varying(255),
    university_name character varying(255),
    university_phone character varying(255)
);
    DROP TABLE public.university;
       public         heap    postgres    false            ?            1259    17720    university_department    TABLE     ?   CREATE TABLE public.university_department (
    id_university_department bigint NOT NULL,
    university bytea,
    wording character varying(255)
);
 )   DROP TABLE public.university_department;
       public         heap    postgres    false            ?            1259    17672    university_department_seq    SEQUENCE     ?   CREATE SEQUENCE public.university_department_seq
    START WITH 1
    INCREMENT BY 50
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public.university_department_seq;
       public          postgres    false            ?            1259    17673    university_seq    SEQUENCE     x   CREATE SEQUENCE public.university_seq
    START WITH 1
    INCREMENT BY 50
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.university_seq;
       public          postgres    false            ?            1259    17674    user_seq    SEQUENCE     r   CREATE SEQUENCE public.user_seq
    START WITH 1
    INCREMENT BY 50
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
    DROP SEQUENCE public.user_seq;
       public          postgres    false            ?            1259    17442    utilisateur_seq    SEQUENCE     y   CREATE SEQUENCE public.utilisateur_seq
    START WITH 1
    INCREMENT BY 50
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.utilisateur_seq;
       public          postgres    false            ?            1259    17727    visitor    TABLE     <  CREATE TABLE public.visitor (
    id bigint NOT NULL,
    adress character varying(255),
    email character varying(255),
    firstname character varying(255),
    lastname character varying(255),
    password character varying(255),
    phone_number character varying(255),
    photo_url character varying(255)
);
    DROP TABLE public.visitor;
       public         heap    postgres    false            ?            1259    17683    visitor_seq    SEQUENCE     u   CREATE SEQUENCE public.visitor_seq
    START WITH 1
    INCREMENT BY 50
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.visitor_seq;
       public          postgres    false            .          0    17694    administrator 
   TABLE DATA           r   COPY public.administrator (id, adress, email, firstname, lastname, password, phone_number, photo_url) FROM stdin;
    public          postgres    false    225   ^6       4          0    17736    company 
   TABLE DATA           ?   COPY public.company (id, adress, email, firstname, lastname, password, phone_number, photo_url, company_name, domain, logo_url, sector, size, tax_registration_number) FROM stdin;
    public          postgres    false    231   {6       /          0    17701    company_department 
   TABLE DATA           U   COPY public.company_department (id_company_department, wording, company) FROM stdin;
    public          postgres    false    226   ?6       0          0    17706    intern 
   TABLE DATA           ?   COPY public.intern (id, adress, email, firstname, lastname, password, phone_number, photo_url, cv_url, linkedin_url, university) FROM stdin;
    public          postgres    false    227   ?6       1          0    17713 
   university 
   TABLE DATA           ?   COPY public.university (id_university, university_adress, university_fax, university_mail, university_name, university_phone) FROM stdin;
    public          postgres    false    228   ?6       2          0    17720    university_department 
   TABLE DATA           ^   COPY public.university_department (id_university_department, university, wording) FROM stdin;
    public          postgres    false    229   ?6       3          0    17727    visitor 
   TABLE DATA           l   COPY public.visitor (id, adress, email, firstname, lastname, password, phone_number, photo_url) FROM stdin;
    public          postgres    false    230   7       ;           0    0    company_department_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.company_department_seq', 1, false);
          public          postgres    false    220            <           0    0    deps_seq    SEQUENCE SET     7   SELECT pg_catalog.setval('public.deps_seq', 1, false);
          public          postgres    false    215            =           0    0    dept_seq    SEQUENCE SET     7   SELECT pg_catalog.setval('public.dept_seq', 1, false);
          public          postgres    false    216            >           0    0    etablissement_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.etablissement_seq', 1, false);
          public          postgres    false    217            ?           0    0    reunion_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.reunion_seq', 1, false);
          public          postgres    false    218            @           0    0 	   stage_seq    SEQUENCE SET     8   SELECT pg_catalog.setval('public.stage_seq', 1, false);
          public          postgres    false    219            A           0    0    university_department_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.university_department_seq', 1, false);
          public          postgres    false    221            B           0    0    university_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.university_seq', 1, false);
          public          postgres    false    222            C           0    0    user_seq    SEQUENCE SET     7   SELECT pg_catalog.setval('public.user_seq', 1, false);
          public          postgres    false    223            D           0    0    utilisateur_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.utilisateur_seq', 1, false);
          public          postgres    false    214            E           0    0    visitor_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.visitor_seq', 1, false);
          public          postgres    false    224            ?           2606    17700     administrator administrator_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.administrator
    ADD CONSTRAINT administrator_pkey PRIMARY KEY (id);
 J   ALTER TABLE ONLY public.administrator DROP CONSTRAINT administrator_pkey;
       public            postgres    false    225            ?           2606    17705 *   company_department company_department_pkey 
   CONSTRAINT     {   ALTER TABLE ONLY public.company_department
    ADD CONSTRAINT company_department_pkey PRIMARY KEY (id_company_department);
 T   ALTER TABLE ONLY public.company_department DROP CONSTRAINT company_department_pkey;
       public            postgres    false    226            ?           2606    17742    company company_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.company
    ADD CONSTRAINT company_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.company DROP CONSTRAINT company_pkey;
       public            postgres    false    231            ?           2606    17712    intern intern_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.intern
    ADD CONSTRAINT intern_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.intern DROP CONSTRAINT intern_pkey;
       public            postgres    false    227            ?           2606    17726 0   university_department university_department_pkey 
   CONSTRAINT     ?   ALTER TABLE ONLY public.university_department
    ADD CONSTRAINT university_department_pkey PRIMARY KEY (id_university_department);
 Z   ALTER TABLE ONLY public.university_department DROP CONSTRAINT university_department_pkey;
       public            postgres    false    229            ?           2606    17719    university university_pkey 
   CONSTRAINT     c   ALTER TABLE ONLY public.university
    ADD CONSTRAINT university_pkey PRIMARY KEY (id_university);
 D   ALTER TABLE ONLY public.university DROP CONSTRAINT university_pkey;
       public            postgres    false    228            ?           2606    17733    visitor visitor_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.visitor
    ADD CONSTRAINT visitor_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.visitor DROP CONSTRAINT visitor_pkey;
       public            postgres    false    230            .      x?????? ? ?      4      x?????? ? ?      /      x?????? ? ?      0      x?????? ? ?      1      x?????? ? ?      2      x?????? ? ?      3      x?????? ? ?     