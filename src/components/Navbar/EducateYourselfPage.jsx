import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./EducateYourselfPage.css";

const EducateYourselfPage = () => {
  return (
    <div>
      <section className="educate-yourself-statistics">
        <div className="statistics">
          <div>
            Mental health refers to cognitive, behavioral, and emotional
            well-being.
          </div>
          <div>
            Conditions such as stress, depression, and anxiety can all affect
            one's mental health.
          </div>
          <div>
            We must help promote the mental well-being of individuals and
            address the needs of those with defined mental disorders.
          </div>
          <div>
            Around <span>1 in 5</span> children and adolescents in the world
            have a mental disorder.
          </div>
          <div>
            <span>264 million</span> people in the world are affected by
            depression.
          </div>
          <div>
            Half of the mental health disorders begin before{" "}
            <span>age fourteen.</span>
          </div>
          <div>
            <span>Every 40 seconds</span> one person dies from suicide.
          </div>
          <div>
            People with severe mental disorders die{" "}
            <span>10-20 years earlier</span> than the general population.
          </div>
          <div>
            Rates of mental health workers can reach <span>below 0.00002%</span>{" "}
            of the population in low-income countries.
          </div>
          <div>
            The global economy loses <span>$1,000,000,000,000</span> per year
            due to depression and anxiety.
          </div>
          <div>
            <span>Over 40%</span> of countries have no mental health policy.
          </div>
          <div>
            <span>Up to 60%</span> of people with depression can recover with a
            proper combination of anti-depressants and psychotherapy.
          </div>
          <div>
            Around <span>one billion</span> people globally have a mental or
            substance-use disorder.
          </div>
          <div>
            Mental health disorders are more prevalent in{" "}
            <span>women and the poor.</span>
          </div>
          <div>
            <span>Nine out of ten people</span> with mental health problems say
            that stigma and discrimination have a negative effect on their
            lives.
          </div>
          <div id="stories">
            <span>Listen to their stories.</span>
          </div>
          <div>
            "I felt disgusted every time I looked in the mirror. I stayed away
            from people as much as I could, and felt I made an embarrassment of
            myself whenever I went out in public."
            <br />
            <span>- Sarah, age 24.</span>
          </div>
          <div>
            "I didn't know who would be there for me if I told them what I was
            going through, and I was embarrassed."
            <br />
            <span>- Barry, age 37.</span>
          </div>
          <div>
            "I felt guilty when I struggled with these things and felt like
            everyone else was clearly so much better at coping."
            <br />
            <span>- Hazel, age 24.</span>
          </div>
          <div>
            "It can be the hardest thing to do, but standing up and saying that
            you deserve better than this is the first step to helping yourself."
            <br />
            <span>- Michael, age 25.</span>
          </div>
        </div>
      </section>

      <section className="educate-yourself-call-to-action">
        <div className="textual-info">
          <h1>What can you do now with this information?</h1>
          <a
            href="help-yourself.html"
            aria-label="Link to the 'Help Yourself' page"
          >
            <p>Learn about ways to protect your mental health</p>
          </a>
          <a
            href="help-others.html"
            aria-label="Link to the 'Help Others' page"
          >
            <p>Learn about ways to protect the mental health of others</p>
          </a>
        </div>
        <div className="mha-get-started">
          <a href="sign-up.html" aria-label="Link to the 'Sign Up' page">
            <div className="get-started-button">Get started</div>
          </a>
          <a
            href="spread-the-word.html"
            className="start-spreading-awareness angle-color-black"
            aria-label="Link to the 'Spread the Word' page"
          >
            Start spreading awareness
          </a>
        </div>
      </section>
    </div>
  );
};

export default EducateYourselfPage;
