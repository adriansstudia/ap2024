// src/components/Page3.js

import React from 'react';

const Page3 = () => {
  const embeddedHtml = `
  <app-content-inside _ngcontent-sc87="" _nghost-sc56="" class="">
    <div _ngcontent-sc56="" class="row">
        <div _ngcontent-sc56="" class="col-12">
            <div _ngcontent-sc56="" class="document-inside" lang="pl">
                <div class="a_hd">
                    <h2>
                        <div class="a_nm">ROZPORZĄDZENIE</div>
                        <div class="a_aut">
                            MINISTRA ROZWOJU <span class="fn-ref" id="ref-przyp_1">1</span>
                        </div>
                        <div class="a_day">z dnia 11 września 2020 r.</div>
                        <div class="a_tl">
                            w sprawie szczegółowego zakresu i formy projektu budowlanego <span class="fn-ref" id="ref-przyp_2">2</span>
                        </div>
                    </h2>
                </div>
                <div class="a_body">
                    <div id="roz(1)" class="toc a_sec-roz unit-menu">
                        <div class="a_hdr" id="d3007930e46">
                            <h4>
                                <div class="a_lb">
                                    <a href="/akty-prawne/dzu-dziennik-ustaw/szczegolowy-zakres-i-forma-projektu-budowlanego-19026004/roz-1" class="unit-link" data-unit-id="roz(1)">Rozdział &nbsp;1</a>
                                </div>
                                <div class="a_tl">
                                    <p>Przepisy ogólne</p>
                                </div>
                            </h4>
                        </div>
                        <div class="a_body">
                            <div id="par(1)" class="a_par toc unit-menu">
                                <span class="unit-menu__btn">
                                    <i class="fa fa-plus-circle"></i>
                                </span>
                                <div class="a_lb a_lb-wt">
                                    §&nbsp;1.&nbsp;<span class="a_lb-s">[Ustawa w rozumieniu przepisów rozporządzenia]</span>
                                </div>
                                <span>Ilekroć w rozporządzeniu jest mowa o:</span>
                                <div id="par(1)pkt(1)" class="a_pkt unit-menu">
                                    <span class="unit-menu__btn">
                                        <i class="fa fa-plus-circle"></i>
                                    </span>
                                    <div class="a_lb">1) </div>
                                    <span>
                                        podpisie osobistym - należy przez to rozumieć podpis osobisty, o którym mowa w <a href="/akty-prawne/dzu-dziennik-ustaw/dowody-osobiste-17643085/art-2" class="act document-link">art. 2 ust. 1 pkt 9</a>
                                        ustawy z dnia 6 sierpnia 2010 r. o dowodach osobistych ((Dz. U. z 2022 r. poz. 671);
                                    </span>
                                </div>
                                <div id="par(1)pkt(2)" class="a_pkt unit-menu">
                                    <span class="unit-menu__btn">
                                        <i class="fa fa-plus-circle"></i>
                                    </span>
                                    <div class="a_lb">2) </div>
                                    <span>ustawie - należy przez to rozumieć ustawę z dnia 7 lipca 1994 r. - Prawo budowlane.</span>
                                </div>
                            </div>
                            <div id="par(2)" class="a_par toc unit-menu">
                                <span class="unit-menu__btn">
                                    <i class="fa fa-plus-circle"></i>
                                </span>
                                <div class="a_lb a_lb-wt">
                                    §&nbsp;2.&nbsp;<span class="a_lb-s">[Język i czytelność projektu budowlanego]</span>
                                </div>
                                <span>Projekt budowlany sporządza się w języku polskim, w czytelnej technice graficznej.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</app-content-inside>
`;

  return (
    <div>
      <h2>Page</h2>
      <p>This is text</p>
      <div dangerouslySetInnerHTML={{ __html: embeddedHtml }} />
    </div>
  );
};

export default Page3;
