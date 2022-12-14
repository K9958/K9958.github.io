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
    alt: "Pohjan mallinnus"
    title: "Pohjan mallinnus"
    - url: assets/images/3d/Pohjapiirros.png
    image_path: assets/images/3d/Pohjapiirros.png
    alt: Pohjapiirros
    title: Pohjapiirros
    - url: assets/images/3d/SaunaMalli.png
    image_path: assets/images/3d/SaunaMalli.png
    alt: Mökin malli.
    title: Mökin malli

galleryseinat:
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

galleryikkunat:
  - url: assets/images/3d/08ikkunalaudoitus.png
    image_path: assets/images/3d/08ikkunalaudoitus.png
    alt: Ikkunalaudoitus
    title: Ikkunalaudoitus
  - url: assets/images/3d/08ikkunalaudoitus.png
    image_path: assets/images/3d/08ikkunalaudoitus.png
    alt: Ikkunan karmit
    title: Ikkunan karmit
  - url: assets/images/3d/10IkkunaParent.png
    image_path: assets/images/3d/10IkkunaParent.png
    alt: ikkunan objektien ryhmittely
    title: ikkunan objektien ryhmittely
  - url: assets/images/3d/09IkkunaMatskut.png
    image_path: assets/images/3d/09IkkunaMatskut.png
    alt: Oviaukko
    title: Oviaukko


  - url: assets/images/3d/12linkObjectData.png
    image_path: assets/images/3d/12linkObjectData.png
    alt: Objektien linkitys
    title: Objektien linkitys
  - url: assets/images/3d/13linkattumuutos.png
    image_path: assets/images/3d/13linkattumuutos.png
    alt: Linkitetty objekti muuttuu samalla
    title: Linkitetty objekti muuttuu samalla
  - url: assets/images/3d/16Monistetutikkunat.png
    image_path: assets/images/3d/16Monistetutikkunat.png
    alt: Linkitetyt ikkunat
    title: Linkitetyt ikkunat

galleryhaasteet:
  - url: assets/images/3d/25RikkiCyclesilla.png
    image_path: assets/images/3d/25RikkiCyclesilla.png
    alt: Materiaalissa artifaktit Cyclesillä
    title: Materiaalissa artifaktit Cyclesillä
  - url: assets/images/3d/31Boolean.png
    image_path: assets/images/3d/31Boolean.png
    alt: Leikkausjäljet booleanilla
    title: Leikkausjäljet booleanilla
  - url: assets/images/3d/32RemoveMaterial.png
    image_path: assets/images/3d/32RemoveMaterial.png
    alt: Ratkaisuna materiaalin poistaminen..
    title: Ratkaisuna materiaalin poistaminen..
  - url: assets/images/3d/33ApplyBooleanAddMaterial.png
    image_path: assets/images/3d/33ApplyBooleanAddMaterial.png
    alt: ..ja takaisin laittaminen
    title: ..ja takaisin laittaminen
  
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

{% include gallery id="galleryaloitus" %}

### Seinät

Hirsimökin seinät mallinsin *Arrayksi* asetetuista hirsistä, jotka mallinsin sylinteristä (ks galleria). 

{% include gallery id="galleryseinat" %}

### Ovi ja ikkunat

Ovelle ja ikkunoille tein aukot kuutioilla joille asetin **Boolean**-modifierin. Boolean leikkaa aukon toiseen objektiin käyttäen itsensä geometriaa leikkurina.

{% include gallery id="galleryikkunat" %}

## Hasteet

Alussa en tajunnut sitä miten booleanit toimivat, ja ihmettelin, että boolean-leikkauksen jälkeen leikkauskohdan materiaali on eri kuin mikä leikattavan materiaalin. Tutustuttuani aiheeseen dokumentaation kautta paremmin, tajusin, että booleanit jättävät leikkaavan objektin materiaalin leikattavan objektin leikkauspinnalle. Ratkaisu tähän oli poistaa leikattavan objektin materiaali ja asettaa se uudelleen leikkauksen jälkeen.

Kun olin saanut ovet ja ikkunat tehtyä, kokeilin renderöintiä **Cyclesillä** ja huomasin, että ovessa ja ikkunalaudoissa oli mustia raitoja. Eeveellä renderöitäessä ei ollut. Huomasin, että objektin Pivot-pointin eli originin asettaminen saranasta objektin keskelle korjasi osittain mustat raidat tekstuurissa.

Renderöinnissä oli lopuksi haastetta, sillä maisemani oli niin yksityiskohtainen, että yhden kehyksen renderöinti kesti yli 40 minuuttia. Minulla oli animaatioiden vuoksi renderöitäviä kehyksiä 100, joten joko animaatio piti jättää pois, tai keksiä miten renderöintiaikaa saisi pienennettyä. Tuntiopettaja antoi vinkin, että renderöitäviä asioita voi jakaa eri **layereihin** eli kerroksiin. Löysin netistä hieman ohjeita, ja sain objektit jaettua eri kerroksiin ja sain renderöityä kerrokset erikseen ja yhdistettyä **kompositoinnin** avulla.

Renderöinnissä tuli toinenkin ongelma, kun yhden animaation tallennuksen jälkeen tallennustiedostomuodoksi oli vaihtunut PNG ilman alfa-kerrosta, eli toisin sanoen läpinäkymätön kuvamuoto. Tämän jälkeen olin renderöinyt 100 kehystä veden layeriä vain huomatakseni, että kuvissa ei ole ollenkaan läpinäkyvyyttä enkä voi yhdistää kuvia kompositoinnin avulla. Vaihdoin tallennustiedostomuotoa tallentamaan myös läpinäkyvyystiedot, ja jouduin renderöimään nämä 100 kehystä uudelleen.'

{% include gallery id="galleryhaasteet" %}

# Itsearviointi

Työ eteni ja onnistui suuremmilta osin hyvin. Olen tyytyväinen lopputulokseen. Parannettavaa tietenkin on paljon, mutta tähän projektiin tämä on mielestäni riittävä lopputulos. Käytin monimutkaisia tekniikoita esim. Geometry Nodes, ViewLayer-renderöinti, animaation kompositointi, partikkelit. Skulptausta oli hieman myös mukana (maasto). Käytin myös mielestäni tekniikoita suhteellisen monipuolisesti.

## Kritiikki

Työssä ehkä heikoin kohta on siinä, että maiseman monimutkaisuus ei jakaannu ihan tasaisesti. Mökki on monimutkaisin osa maisemaa, ja ympäröivä muu maisema ei ole aivan yhtä monimutkainen. Mökkiin onkin käytetty suhteessa eniten ainaa. Ennen kuin tein viimeisen renderöinnin, pienensin näkymää kohdistumaan enemmän mökkiin, että mökki pääsisi paremmin oikeuksiinsa.


# Tuntikirjaukset