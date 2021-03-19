import { useEffect } from "react";
import "./CookieConsent.scss";
import setCookies from "./helpers/setCookies";

export default function CookieConsent() {

    useEffect(function() {
        document.body.className = "modal--open";
    }, []);

    function allowAll() {
        var now = Date.now();
        var expires = new Date(now + 60000).toUTCString();
        var payload = {
            acceptnecessary:true,
            acceptanalytics:true
        }
        setCookies(payload);
        document.cookie = `landingpagedemo=${JSON.stringify(payload)}; expires=${expires}; path=/`;
        document.body.className = "";
        document.querySelector(".overlay").style.display = "none";
    }

    return (
        <div className="overlay">
            <section>
                <header>
                    <h1>Hvad bruger vi cookies til?</h1>
                </header>

                <article>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <input type="checkbox" id="cookieNecessary" checked disabled />
                                    <label className="consentToggle" htmlFor="cookieNecessary" />
                                </td>
                                <td>
                                    <p>Tillad alle nødvendige cookies.
                                    Dette er cookies som er nødvendige for at denne applikation virker korrekt.
                                        Der foregår ingen sporing ved hjælp af denne slags cookie.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="checkbox" id="cookieAnalytics" />
                                    <label className="consentToggle" htmlFor="cookieAnalytics" />
                                </td>
                                <td>
                                    <p>Tillad analytics.
                                    Vi bruger tredjepartcookies fra Google til at spore og lave statistik over vores besøgende.
                                            Dette gør vi for hele tiden at kunne forbedre din oplevelse på applikationen.</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="buttons">
                        <button>Tillad valgte</button>
                        <button onClick={() => allowAll()}>Tillad alle</button>
                    </div>
                </article>
            </section>
        </div>
    )
}