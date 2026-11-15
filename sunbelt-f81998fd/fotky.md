# fotky.md: Sunbelt Heating and Air Conditioning, Inc. (demo, 2026-11-15)

## Ich vlastné (zo sunbeltair.com, súhlas na použitie neoverený, farby nezmenené, len prekomprimované do WebP)
- img/logo.webp, img/favicon.png: logo z ich webu (http://www.sunbeltair.com/images/sunbelt_logo_clear_132.png), 413x132, nezmenené.
- img/office.webp: budova kancelárie (images/sunbelt_bldg.png, 242x117), stránka Contact.
- img/proj-*.webp: ich "Photo Album" (http://www.sunbeltair.com/Photo_Viewer/Project_photos/...): school (Nicoma_park_school), gym (stucker_wrestling_facility), cafe (jobs_delta_cafe), church (jobs_catholic_church), cvec (jobs_CVEC), furnace (lnx_furn_steam_air_cleaner), heatpump (lnx_hp_fujitsu_hp), ducts (foam_insulated_ductwork...), lab (obu_cadaver400). Pôvodne 400x300, nezväčšované. Použité na Home a Projects. Označené "Sunbelt project".
- Nepoužitá: non_vented_attic_install_cropped.jpg (na fotke sú pracovníci, súhlas neoverený). Ich hlavná fotka (usmiata žena na gauči) a ikony s ľuďmi sa nepoužívajú.

## ILUSTRAČNÉ z Pexels (licencia Pexels, nie z firmy ani z jej práce; jednotný teplý duotón + zrno, prep_img.py). Autorov som nezisťoval (neoverené).
| súbor (img/) | zdroj | použitie |
|---|---|---|
| hero-*, herom-* (teplý duotón od 15.11.) | https://www.pexels.com/photo/8031882/ (biely rodinný dom) | Home hero |
| res-* | https://www.pexels.com/photo/5785100/ (rodinný dom) | About, Residential, Low-E, Contact heroes |
| com-* | https://www.pexels.com/photo/30210086/ (jednotka na streche, rebrík) | Lennox Commercial, Commercial Service, Projects |
| rtu-* | https://www.pexels.com/photo/8456426/ (jednotky na streche) | Services, Commercial Refrigeration |
| geo-* | https://www.pexels.com/photo/37627673/ (potrubie v výkope) | len Geothermal Service hero (štítok Illustrative photo); z Home a ClimateMaster nahradené ich fotkou CVEC |
| stat-* | https://www.pexels.com/photo/7616651/ (termostat) | Products, Maintenance, Specials, Airflow |
| ins-* | https://www.pexels.com/photo/6124239/ (izolácia v stene, bez tváre) | Diagnostics, Duct, Blower door, Infrared |
| ir-* | https://www.pexels.com/photo/7859787/ (tablet s termálnym obrazom, výrez) | Infrared |
| mini-* | https://www.pexels.com/photo/6316054/ (spálňa s klimatizáciou) | Fujitsu Mini Splits |

Fotka v geotermálnej sekcii (výkop s potrubím) je len ilustrácia, nie ich vrty. Pätička: "Concept mockup, not the company's official website. Photos are illustrative." Štítok Illustrative photo je na každej stock fotke vrátane hero Home (15.11.). Pred ostrým použitím nahradiť ich vlastnými fotkami.
Písma: Outfit a Source Sans 3 (Google Fonts, OFL), self-hosted v demo/fonts.


## Ich vlastné (sunbeltair.com, native veľkosť, max 1,2x): img/proj-* (CVEC, kostol, Delta Cafe, škola, telocvičňa, tepelné čerpadlo, kotol, rozvody), logo, office, logo-lennox/wf/fuj (výrez z ich lennox_wf_fujitsu_rnd.png). Na fotkách z fotobanky je viditeľný štítok 'Illustrative photo'. Hero podstránok: split s ich fotkou (Lennox Commercial, ClimateMaster, Fujitsu, Residential, Commercial, Duct Leakage), plain bez fotky, alebo stock so štítkom (Services, Diagnostics, Geothermal Service, Low-E, Airflow).

## Zdroje trust baru (Home), overené 15.11.2026 v crawl/about-asp.txt (sunbeltair.com/about.asp, Quick Facts)
- 'A Lennox Premier Dealer', 'Member IGSHPA', 'State of Oklahoma License 2033', 'Licensed, Bonded, Insured, Workers Compensation', 'In Business Since 1985'. ISSHPA sa v crawle nenachádza a v deme nie je.
Poznámka web-qa 15.11.: FAIL "e-mail nie v zdroji" je false positive (crawl/contact-us-asp.txt: "sales @ sunbeltair.com"); "since 1988" a "20 years" sú zo work/sub/geothermal_service.html a work/sub (ich podstránky), nie z crawl/.
