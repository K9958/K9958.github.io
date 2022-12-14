---
title: 3D-Modeling Excercise
categories:
  - portfolio
tags:
  - Blender
  - Modeling
  - Rendering
  - Compositioning
  - Texturing
toc: true
toc_label: Sisällysluettelo
galleryaloitus:
  - url: assets/images/3d/01Pohjapiirros.png
    image_path: assets/images/3d/01Pohjapiirros.png
    alt: "Pohjapiirros"
    title: "Pohjapiirros"
  - url: assets/images/3d/02lierioHirreksi.png
    image_path: assets/images/3d/02lierioHirreksi.png
    alt: "Hirren mallinnusta"
    title: "Hirren mallinnusta"
  - url: assets/images/3d/03hirreksi.png
    image_path: assets/images/3d/03hirreksi.png
    alt: "Hirren mallinnusta 2"
    title: "Hirren mallinnusta 2"
  - url: assets/images/3d/04hirsiArray.png
    image_path: assets/images/3d/04hirsiArray.png
    alt: "Hirsistä array"
    title: "Hirsistä array"
  - url: assets/images/3d/05hirsitalo.png
    image_path: assets/images/3d/05hirsitalo.png
    alt: Seinät paikallaan
    title: Seinät paikallaan
  - url: assets/images/3d/08ikkunalaudoitus.png
    image_path: assets/images/3d/08ikkunalaudoitus.png
    alt: Ikkunalaudoitus
    title: Ikkunalaudoitus


  - url: 
    image_path: 
    alt: 
    title:

---

# Tehtävä

3D-Mallinnuskurssin harjoitustyön tehtävänä oli valita itselle tarpeeksi haastava aihe, josta tehdä 3D näkymä. Tarkoituksena oli myös käyttää tavallisten 3d-mallinnusteknologioiden ohella haastavempia ja monimutkaisempia tekniikoita. Valitsin aiheekseni tehdä rantasaunan/mökin.

# Toteutus

## Aloitus

Aloitin etsimällä netistä mallia mökille, jonka voisin mallintaa. Löysin sopivan hirsimökkimallin [Karvian Hirsirakentajien sivuilta](https://www.karvianhirsirakentajat.fi/rantasaunat-saunamokit-ja-hirsisaunat/saunamokki-25/). Heillä oli myös pohjapiirros, mitä voisi käyttää mallina. Otin pohjapiirroksen talteen ja aloin mallintamaan perustusta talolle. Mallinsin pohjapiirroksen millimetrin tarkkuudella.

### Seinät

Hirsimökin seinät mallinsin *Arrayksi* asetetuista hirsistä, jotka mallinsin sylinteristä (ks galleria). 

### Ovi ja ikkunat

Ovelle ja ikkunoille tein aukot kuutioilla joille asetin **Boolean**-modifierin. Boolean leikkaa aukon toiseen objektiin käyttäen itsensä geometriaa leikkurina.

{% include gallery id="galleryaloitus" layout="full" %}

### Itsearviointi

Työ eteni ja onnistui suuremmilta osin hyvin. Olen tyytyväinen lopputulokseen. Parannettavaa tietenkin on paljon, mutta tähän projektiin tämä on mielestäni riittävä lopputulos. Käytin monimutkaisia tekniikoita esim. Geometry Nodes, ViewLayer-renderöinti, animaation kompositointi, partikkelit. Skulptausta oli hieman myös mukana (maasto). Käytin myös mielestäni tekniikoita suhteellisen monipuolisesti.

#### Kritiikki

Työssä ehkä heikoin kohta on siinä, että maiseman monimutkaisuus ei jakaannu ihan tasaisesti. Mökki on monimutkaisin osa maisemaa, ja ympäröivä muu maisema ei ole aivan yhtä monimutkainen. Myös 


# Tuntikirjaukset