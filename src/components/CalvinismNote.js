import React from "react";
import "./CalvinismNote.css";

function CalvinismNote() {
  return (
    <div className="note-container">
      {/* YouTube Video Thumbnail */}
      <div className="video-thumbnail">
        <a
          href="https://www.youtube.com/watch?v=EeSx7QlWAzQ&list=PLY2G1Gk_v1wOFzOk5PogZnPCioanrblrz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.youtube.com/vi/EeSx7QlWAzQ/maxresdefault.jpg"
            alt="Calvinism Video Thumbnail"
            className="thumbnail-image"
          />
        </a>
      </div>

      <h1 className="main-title">Calvinism 101</h1>

      <h2 className="subtitle">Introduction</h2>
      <div className="block">
        <p>
          Calvinism is a theological system closely associated with <b>John Calvin</b> (1509–1564), who expounded his views most famously in his book <i>The Institutes of the Christian Religion</i>. This system is summarized by the <b>TULIP</b> acronym, which was first coined by Lorraine Boettner in 1932. The key doctrines of Calvinism emphasize God's sovereignty in salvation, stressing the need for divine intervention for humanity's spiritual restoration.
        </p>
      </div>

      <h2 className="subtitle">Historical Background</h2>
      <div className="block">
        <ul className="minimal-list">
          <li>
            <b>John Calvin's Contribution:</b> Calvin’s work, <i>The Institutes of the Christian Religion</i>, laid the foundation for the Calvinist theological system.
          </li>
          <li>
            <b>The Origin of TULIP:</b> The term was popularized in Lorraine Boettner's 1932 book <i>The Reformed Doctrine of Predestination</i>.
          </li>
          <li>
            <b>Synod of Dort (1618–1619):</b> This significant council was convened to address Jacob Arminius’ objections to Calvinist theology, resulting in the affirmation of the five doctrinal points, later summarized by TULIP.
          </li>
        </ul>
      </div>

      <h2 className="subtitle">The Five Points of Calvinism (TULIP)</h2>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Letter</th>
            <th>Meaning</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>T</td>
            <td>Total Depravity</td>
            <td>Humans are spiritually dead and unable to seek God without God’s intervention in the process of salvation.</td>
          </tr>
          <tr>
            <td>U</td>
            <td>Unconditional Election</td>
            <td>God’s choice of who will be saved is not based on any foreseen merit or action on the part of the individual, but solely on God’s sovereign will.</td>
          </tr>
          <tr>
            <td>L</td>
            <td>Limited Atonement</td>
            <td>Christ’s death was intended to atone for the sins of the elect, not for all of humanity.</td>
          </tr>
          <tr>
            <td>I</td>
            <td>Irresistible Grace</td>
            <td>When God calls someone to salvation, they cannot resist His call, as His grace is ultimately effectual in bringing the elect to faith.</td>
          </tr>
          <tr>
            <td>P</td>
            <td>Perseverance of the Saints</td>
            <td>Those who are truly saved will remain faithful to the end, secured by God’s power.</td>
          </tr>
        </tbody>
      </table>

      <h2 className="subtitle">Criticism of Calvinism</h2>
      <div className="block">
        <ul className="minimal-list">
          <li>
            <b>Philosophical Foundations:</b> Calvinism heavily draws on <b>Saint Augustine’s</b> theological views, particularly his teachings on predestination, which share similarities with Manichaean Gnosticism.
          </li>
          <li>
            <b>Debate on God's Sovereignty vs Human Responsibility:</b> A central point of tension in Calvinist thought is the relationship between God’s absolute sovereignty in salvation and human responsibility in accepting or rejecting the Gospel.
          </li>
        </ul>
      </div>

      <h2 className="subtitle">The Influence of Augustine</h2>
      <div className="block">
        <p>
          While John Calvin’s system of theology is often considered distinct, it is profoundly shaped by <b>Saint Augustine</b>, whom Calvin cited extensively. In fact, Calvin quoted Augustine over 1,700 times, making up more than half of his early Christian writings. Augustine's views on predestination and justification were foundational to Calvin’s own theology, including his reliance on Augustine’s doctrine of the fall of man, total depravity, and unconditional election.
        </p>
      </div>

      <h2 className="subtitle">Manichaeism and Gnosticism in Calvinism</h2>
      <div className="block">
        <p>
          The theological ideas underpinning Calvinism can be traced back to Augustine’s experience with <b>Manichaeism</b>—a Persian form of Gnosticism—before his conversion to Christianity. Manichaeism promoted a dualistic worldview, emphasizing an absolute division between the elect and the non-elect, predestination, and a lack of human free will. While these ideas were adapted to the Christian narrative, they retain many of their original features in Calvinistic doctrine.
        </p>
      </div>

      <h2 className="subtitle">Total Depravity and Free Will</h2>
      <div className="block">
        <p>
          The <b>T</b> in TULIP stands for <b>Total Depravity</b> or <b>Total Inability</b>, which asserts that humans are incapable of choosing to follow God without divine intervention. According to this doctrine, <i>regeneration precedes faith</i>, meaning that an individual must be spiritually reborn by God before they are able to place faith in Christ. This leads to the Calvinistic claim that free will, as commonly understood, does not exist because individuals are not able to choose God on their own.
        </p>
      </div>
    </div>
  );
}

export default CalvinismNote;
