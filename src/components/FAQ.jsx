export default function FAQ() {
    return (
        <div className="w-10/12 mx-auto my-14">
    <h1 className="text-3xl font-bold text-center mb-9">Help & Support Center</h1>

  <div className="collapse collapse-arrow bg-[rgb(46,134,222,0.2)] mb-3">
    <input type="radio" name="my-accordion-2" defaultChecked />
    <div className="collapse-title text-xl font-medium">How do we rate games in someones reviews?</div>
    <div className="collapse-content">
    <p>We rate games based on gameplay, graphics, story, replayability, and overall experience. Each review includes a detailed breakdown of these factors to provide a fair and comprehensive score.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow bg-[rgb(46,134,222,0.2)] mb-3">
    <input type="radio" name="my-accordion-2" />
    <div className="collapse-title text-xl font-medium">Do you only review new game releases?</div>
    <div className="collapse-content">
    <p>While we prioritize reviewing new releases, we also feature retro games, indie games, and classics that deserve attention. If there's a game you think we should review, feel free to let us know!</p>
    </div>
  </div>
  <div className="collapse collapse-arrow bg-[rgb(170,111,219,0.2)] mb-3">
    <input type="radio" name="my-accordion-2" />
    <div className="collapse-title text-xl font-medium">How often are new reviews posted?</div>
    <div className="collapse-content">
    <p>We post new reviews regularly, typically on a weekly basis. However, this may vary depending on the number of releases and our review schedule.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow bg-[rgb(170,111,219,0.2)]">
    <input type="radio" name="my-accordion-2" />
    <div className="collapse-title text-xl font-medium">Can I subscribe to updates?</div>
    <div className="collapse-content">
    <p> Definitely! Sign up for our newsletter to get the latest reviews and news delivered straight to your inbox.</p>
    </div>
  </div>
    </div>
    )
}