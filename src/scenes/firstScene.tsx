import {makeScene2D, Circle, Rect, Video, Node, Shape, Txt, Line, Img} from '@motion-canvas/2d'; 
import {PossibleVector2, Reference, SignalValue, Vector2, all, any, delay, easeOutBounce, easeOutQuart, linear, useLogger, waitFor, waitUntil} from '@motion-canvas/core';
import {BACKGROUND_COLOR, BACKGROUND_COLOR_RGB, BORDER_MARGIN, DEFAULT_FONT, DEFAULT_FONT_COLOR, SHAPES_OUTLINE_WIDTH, TITLE_FONT, VIEW_HEIGHT, VIEW_WIDTH} from './consts';
import video from 'C:/Users/Tonas Jane/OneDrive/Documents/MotionCanvas/climate-change-video/assets/Recording.mp4';
import factory_clip from 'C:/Users/Tonas Jane/OneDrive/Documents/MotionCanvas/climate-change-video/assets/factory-gas-release.mp4';
import greta_thunberg_image from 'C:/Users/Tonas Jane/OneDrive/Documents/MotionCanvas/climate-change-video/assets/Greta-Thunberg-image.png';
import factory_image from 'C:/Users/Tonas Jane/OneDrive/Documents/MotionCanvas/climate-change-video/assets/factory-gas-release.jpg';
import factory_image2 from 'C:/Users/Tonas Jane/OneDrive/Documents/MotionCanvas/climate-change-video/assets/factory-image.png';
import factory_image3 from 'C:/Users/Tonas Jane/OneDrive/Documents/MotionCanvas/climate-change-video/assets/factory-image2.jpg';
import temperature_image from 'C:/Users/Tonas Jane/OneDrive/Documents/MotionCanvas/climate-change-video/assets/temperature-rising.png';
import temperature_image2 from 'C:/Users/Tonas Jane/OneDrive/Documents/MotionCanvas/climate-change-video/assets/temperature-rising1.png';
import temperature_image3 from 'C:/Users/Tonas Jane/OneDrive/Documents/MotionCanvas/climate-change-video/assets/global-temperature-map.jpg';
import stage_image from 'C:/Users/Tonas Jane/OneDrive/Documents/MotionCanvas/climate-change-video/assets/stage-image.jpg';
import backyard_image from 'C:/Users/Tonas Jane/OneDrive/Documents/MotionCanvas/climate-change-video/assets/backyard.jpg';
import tree_image from 'C:/Users/Tonas Jane/OneDrive/Documents/MotionCanvas/climate-change-video/assets/tree.jpg';


export default makeScene2D(function* (view) {


  //#region View settings

  view.fill(BACKGROUND_COLOR);

  //#endregion

  

  //#region Objects

  var logger = useLogger()

  const subtitle_box_size = 100;

  const SubtitlesText = new Txt({
    fontFamily: DEFAULT_FONT,
    fill: "#ffffff",
    maxWidth: VIEW_WIDTH - BORDER_MARGIN*2,
    textWrap: true,
    text: "",
  });

  const Subtitles = new Rect({
    fill: "#000000",
    size: [VIEW_WIDTH, subtitle_box_size],
    position: [0, VIEW_HEIGHT/2 - subtitle_box_size/2],
    children: [
      SubtitlesText,
    ]
  });

  //#endregion



  //#region Subtitles

  yield * any(
    waitFor(0),
    delay(0, SubtitlesText.text("Greetings to you, my name is Đoàn Ngọc Khánh Quan", 0)),
    delay(4, SubtitlesText.text("and every person I know is aware about mankind's biggest error", 0)),
    delay(8, SubtitlesText.text("climate change", 0)),
    delay(9, SubtitlesText.text("It's the problem we still haven't overcome.", 0)),
    delay(12, SubtitlesText.text("Climate change is a set of problems in the Earth's biosphere", 0)),
    delay(16, SubtitlesText.text("that are results of ever-cascading growth of human production.", 0)),
    delay(20, SubtitlesText.text("These issues are most present in ecological habitats", 0)),
    delay(22, SubtitlesText.text("and many Earth's natural measurements such as temperature or solar radiation.", 0)),
    delay(29, SubtitlesText.text("We've always talked about causes such as the release of greenhouse gases", 0)),
    delay(33, SubtitlesText.text("when talking about climate change.", 0)),
    delay(35, SubtitlesText.text("But I believe the biggest cause of climate change is not that", 0)),
    delay(40, SubtitlesText.text("but apathy.", 0)),
    delay(42, SubtitlesText.text("Specifically in this instance,", 0)),
    delay(44, SubtitlesText.text("apathy refers to the detachment of one's responsibility to support the greater good.", 0)),
    delay(50, SubtitlesText.text("", 0)),
    delay(54, SubtitlesText.text("For most of you,", 0)),
    delay(55, SubtitlesText.text("the answer is no.", 0)),
    delay(57, SubtitlesText.text("We are expected to cause one-third of natural life", 0)),
    delay(60, SubtitlesText.text("to disappear from the face of this planet by 2050", 0)),
    delay(64, SubtitlesText.text("and there is still not sufficient action to change it.", 0)),
    delay(67, SubtitlesText.text('"There are no emergency meetings, no headlines, no breaking news.', 0)),
    delay(71, SubtitlesText.text('No one is acting as if we were in a crisis."', 0)),
    delay(75, SubtitlesText.text("But apathy is not just inherent human nature,", 0)),
    delay(79, SubtitlesText.text("there are clear causes as to why we don't want to act.", 0)),
    delay(83, SubtitlesText.text("1) Powerlessness", 0)),
    delay(84, SubtitlesText.text("Our brain is not wired to care about the grand scheme of things,", 0)),
    delay(89, SubtitlesText.text("only the things in front of us.", 0)),
    delay(91, SubtitlesText.text("And when you have to take care of your own life,", 0)),
    delay(94, SubtitlesText.text('"saving the world" sounds insane.', 0)),
    delay(96, SubtitlesText.text("And when others don't change then you can't be expected to change.", 0)),
    delay(100, SubtitlesText.text("I can't be expected to change when", 0)),
    delay(102.5, SubtitlesText.text("my friends, my family and my government don't.", 0)),
    delay(106, SubtitlesText.text("2) Desensitization", 0)),
    delay(110, SubtitlesText.text("Media and education is really good at giving you information about climate change.", 0)),
    delay(115, SubtitlesText.text("At first glance, that sounds great", 0)),
    delay(117, SubtitlesText.text("but in fact it is a double-headed knife.", 0)),
    delay(120, SubtitlesText.text("So what if another coal factory released more gas,", 0)),
    delay(123.5, SubtitlesText.text("or what if the temperature rose again.", 0)),
    delay(125.5, SubtitlesText.text("It's not any different than yesterday or last year.", 0)),
    delay(128.5, SubtitlesText.text("Things happen and we just continue living.", 0)),
    delay(132, SubtitlesText.text("Nothing shocks us anymore.", 0)),
    delay(134.5, SubtitlesText.text("So is it hopeless? Are we doomed to fail?", 0)),
    delay(137.7, SubtitlesText.text("No, we can still take action.", 0)),
    delay(140, SubtitlesText.text("1) We need to be aware", 0)),
    delay(143, SubtitlesText.text("You'll reap what you've sown.", 0)),
    delay(145.2, SubtitlesText.text("And it doesn't take more than a lifetime to be affected.", 0)),
    delay(148.6, SubtitlesText.text("If what you've sown is an unsafe and unstable world,", 0)),
    delay(153, SubtitlesText.text("Then that's what you and your future generation are going to get.", 0)),
    delay(157, SubtitlesText.text("2) Inspiring others", 0)),
    delay(160.5, SubtitlesText.text("You don't need to make a big speech to inspire people.", 0)),
    delay(164, SubtitlesText.text("Do little things like ask your friends to be aware of their environment,", 0)),
    delay(167.5, SubtitlesText.text("or maybe plant a few trees.", 0)),
    delay(170, SubtitlesText.text("You can't change everything", 0)),
    delay(172, SubtitlesText.text("you can only change you and those around you.", 0)),
    delay(175.5, SubtitlesText.text("And by doing so, you'll be changing the world,", 0)),
    delay(178, SubtitlesText.text("one action at a time.", 0)),
  );

  //#endregion



  //#region Animation

  yield * waitUntil("introduction");
  //#region -------------------------------

  const Recording = new Video({
    src: video,
    scale: 0.5,
  });

  const Avatar = new Rect({
    fill: "#111111",
    size: Recording.size.x()/2,
    scale: 0.5,
    position: [0, Recording.size().y/2 + VIEW_HEIGHT],
    children: [Recording],
  });

  view.add([Avatar, Subtitles]);
  Recording.play();
  yield * Avatar.position.y(0, 1);
  yield * Avatar.scale(1.3, 1);

  //#endregion

  yield * waitUntil("earth");
  //#region -------------------------------

  const earth_size = 300;
  const earth_biosphere_padding = 100;

  const EarthBiosphere = new Circle({
    fill: "#5effb9",
    size: earth_size + earth_biosphere_padding,
    children: [
      new Circle({
        size: earth_size + earth_biosphere_padding - SHAPES_OUTLINE_WIDTH,
        fill: BACKGROUND_COLOR,
      }),
    ],
  });

  const EarthGlobe = new Circle({
    fill: "lightgreen",
    size: earth_size,
    children: [
      new Circle({
        size: earth_size - SHAPES_OUTLINE_WIDTH,
        fill: BACKGROUND_COLOR,
      }),
      new Txt({
        text: "Earth",
        fill: "lightgreen",
        fontFamily: DEFAULT_FONT,
      }),
    ],
  });

  const Earth = new Circle({
    children: [
      EarthBiosphere,
      EarthGlobe
    ],
    size: EarthBiosphere.size(),
  });

  Earth.position(outside_position(Earth, "bottom"));
  
  yield * all(
    Avatar.position(cardinal_position(Avatar, "left", new Vector2(200, 0)), 1),
  );
  view.add(Earth);
  yield * Earth.position(cardinal_position(Earth, "center", new Vector2(100, 0)), 0.5);
  
  //#endregion

  yield * waitUntil("biosphere");
  //#region -------------------------------

  const BiosphereLine = PRESET_LINE();

  const BiosphereText = PRESET_TXT();
  BiosphereText.position([300, -277]);

  var biosphere_point1 = new Vector2(Earth.position.x( ), -170);
  var biosphere_point2 = new Vector2(200, -250);
  var biosphere_point3 = new Vector2(biosphere_point2.x + 200, biosphere_point2.y);

  BiosphereLine.points([biosphere_point1, biosphere_point2, biosphere_point3]);

  view.add(BiosphereLine);
  view.add(BiosphereText);

  BiosphereLine.end(0);
  yield * all(
    BiosphereLine.end(1, 0.5),
    BiosphereText.text("Biosphere", 1),
  );

  //#endregion

  yield * waitUntil("progress bars");
  //#region -------------------------------

  const bar_length = 300;
  const bar_position = new Vector2(400, 0);
  const bar_space = 130;
  const bar_label_offset = new Vector2(-10, -50);

  const progress_bar_1_ypos = bar_position.y - bar_space;
  const progress_bar_2_ypos = bar_position.y;
  const progress_bar_3_ypos = bar_position.y + bar_space;

  const ProgressBar1 = PRESET_PROGRESS_BAR();
  ProgressBar1.points([[bar_position.x, progress_bar_1_ypos], [bar_position.x + bar_length, progress_bar_1_ypos]]);
  const ProgressLabel1 = PRESET_TXT();
  ProgressLabel1.offset([-1, 0]);
  ProgressLabel1.position([bar_position.x + bar_label_offset.x, progress_bar_1_ypos + bar_label_offset.y]);
  ProgressLabel1.text("Ecosystems");

  const ProgressBar2 = PRESET_PROGRESS_BAR();
  ProgressBar2.points([[bar_position.x, progress_bar_2_ypos], [bar_position.x + bar_length, progress_bar_2_ypos]]);
  ProgressBar2.stroke("#ffed78");
  ProgressBar2.end(0.2);
  const ProgressLabel2 = PRESET_TXT();
  ProgressLabel2.offset([-1, 0]);
  ProgressLabel2.position([bar_position.x + bar_label_offset.x, progress_bar_2_ypos + bar_label_offset.y]);
  ProgressLabel2.text("Temperature");

  const ProgressBar3 = PRESET_PROGRESS_BAR();
  ProgressBar3.points([[bar_position.x, progress_bar_3_ypos], [bar_position.x + bar_length, progress_bar_3_ypos]]);
  ProgressBar3.stroke("#bfff00");
  ProgressBar3.end(0.2);
  const ProgressLabel3 = PRESET_TXT();
  ProgressLabel3.offset([-1, 0]);
  ProgressLabel3.position([bar_position.x + bar_label_offset.x, progress_bar_3_ypos + bar_label_offset.y]);
  ProgressLabel3.text("Solar Radiation");

  const ProgressBarHider = new Rect({
    position: [550, -25],
    fill: BACKGROUND_COLOR,
    size: 400,
  });

  view.add([
    ProgressBar1, ProgressLabel1,
    ProgressBar2, ProgressLabel2,
    ProgressBar3, ProgressLabel3,
    ProgressBarHider,
  ]);

  ProgressBarHider.moveToTop();

  yield * ProgressBarHider.fill("rgba(" + BACKGROUND_COLOR_RGB + ", 0)", 0.5);

  yield * waitUntil("progress bar 1");
  yield * all(
    ProgressBar1.end(0.2, 1),
    ProgressBar1.stroke("#805900", 1),
  )
  
  yield * waitUntil("progress bar 2");
  yield * all(
    ProgressBar2.end(1, 1),
    ProgressBar2.stroke("#ff3b14", 1),
  );
  
  yield * waitUntil("progress bar 3");
  yield * all(
    ProgressBar3.end(1, 1),
    ProgressBar3.stroke("#9900ff", 1),
  );

  yield * waitUntil("disappear");

  yield * any(
    Earth.scale(0, 1),
    Earth.rotation(500, 1),
    ProgressBar1.points([ProgressBar1.points()[0], [VIEW_WIDTH/2, progress_bar_1_ypos]], 0.5),
    ProgressBar1.end(1, 0.5),
    ProgressBar2.points([ProgressBar2.points()[0], [VIEW_WIDTH/2, progress_bar_2_ypos]], 0.5),
    ProgressBar3.points([ProgressBar3.points()[0], [VIEW_WIDTH/2, progress_bar_3_ypos]], 0.5),
  );

  yield * all(
    ProgressBar1.position.x(VIEW_WIDTH/2, 0.5),
    ProgressBar2.position.x(VIEW_WIDTH/2, 0.5),
    ProgressBar3.position.x(VIEW_WIDTH/2, 0.5),
    ProgressLabel1.position.x(VIEW_WIDTH/2, 0.5),
    ProgressLabel2.position.x(VIEW_WIDTH/2, 0.5),
    ProgressLabel3.position.x(VIEW_WIDTH/2, 0.5),
    BiosphereText.position.x(VIEW_WIDTH/2 + 100, 0.5),
    BiosphereLine.start(1, 0.5),
    Avatar.position(cardinal_position(Avatar, "right", new Vector2(-200, 0)), 0.5),
  );

  BiosphereLine.remove();
  ProgressBar1.remove();
  ProgressBar2.remove();
  ProgressBar3.remove();
  Earth.remove();
  ProgressLabel1.remove();
  ProgressLabel2.remove();
  ProgressLabel3.remove();
  BiosphereText.remove();
  ProgressBarHider.remove();

  //#endregion
  
  yield * waitUntil("factory clip");
  //#region -------------------------------

  const FactoryClipText = PRESET_TXT();
  FactoryClipText.justifyContent("center");
  FactoryClipText.text("---------- -----");

  const FactoryClip = new Video({
    src: factory_clip,
    loop: true,
  });

  const FactoryClipBox = new Rect({
    layout: true,
    direction: "column",
    gap: 20,
    scale: 1.5,
    children: [FactoryClip, FactoryClipText],
  });

  FactoryClipBox.position(outside_position(FactoryClip, "bottom", new Vector2(-330, 0)));
  view.add(FactoryClipBox);
  FactoryClip.play();

  yield * FactoryClipBox.position([FactoryClipBox.position.x(), 20], 0.5);
  yield * FactoryClipText.text("Greenhouse Gases", 0.8, linear);

  yield * waitUntil("factory clip dissapear");

  yield * FactoryClipBox.position.y(-2000, 1);

  FactoryClipBox.remove();

  //#endregion

  yield * waitUntil("title: apathy");
  //#region -------------------------------
  
  var title_label_text = "apathy";
  var title_label_color = "255, 255, 255";
  var title_card_color = "0, 0, 0";
  var fade_in_time = 0.2;
  var text_typein_time = 0.2;
  var fade_out_time = 1;

  var TitleCard = TITLE_CARD("rgba(" + title_card_color + ", 0)");
  var TitleLabel = TITLE_LABEL("", "rgba(" + title_label_color + ", 1)");
  var Title = new Rect({
    children: [TitleCard, TitleLabel],
  });
  view.add(Title);

  yield * TitleCard.fill("rgba(" + title_card_color + ", 1)", fade_in_time);
  yield * TitleLabel.text(title_label_text, text_typein_time, linear);
  
  yield * waitUntil("title: apathy disappear")

  yield * all(
    TitleCard.fill("rgba(" + title_card_color + ", 0)", fade_out_time),
    TitleLabel.fill("rgba(" + title_label_color + ", 0)", fade_out_time),
  );
  
  TitleCard.remove();
  TitleLabel.remove();

  //#endregion
  
  yield * waitUntil("question");
  //#region -------------------------------

  const Question = PRESET_TXT();
  Question.fontFamily(TITLE_FONT);
  Question.fontSize(50);
  Question.textWrap(true);
  Question.maxWidth(900);
  Question.textAlign("center");
  Question.ratio(0);

  yield * Avatar.position(cardinal_position(Avatar, "top", new Vector2(0, 150)), 0.5);
  
  Question.position(cardinal_position(Question, "bottom", new Vector2(0, -200)));
  view.add(Question);

  yield * Question.text("Would your life be any different if climate change didn't exist?", 2.5, linear);

  yield * waitUntil("question disappear")

  yield * all(
    Avatar.position(cardinal_position(Avatar, "center"), 1),
    Question.position(outside_position(Question, "bottom"), 1),
  );

  Question.remove();
  
  //#endregion
  
  yield * waitUntil("quote");
  //#region -------------------------------

  const QuoteText = PRESET_TXT();
  QuoteText.fontFamily("Book Antiqua");
  QuoteText.fontSize(50);
  QuoteText.textWrap(true);
  QuoteText.maxWidth(800);
  QuoteText.offset([-1, 0]);

  const QuoteLine = PRESET_LINE();
  QuoteLine.end(0);

  const QuoteImage = new Img({
    src: greta_thunberg_image,
    scale: 2,
  });

  yield * Avatar.position(cardinal_position(Avatar, "left", new Vector2(200, 0)), 1);

  const line_height = 250;
  const quote_xpos = -200;
  QuoteLine.points([[quote_xpos, -line_height/2], [quote_xpos, line_height/2]]);
  QuoteText.position.x(-160);
  QuoteImage.alpha(0);

  view.add([QuoteText, QuoteLine, QuoteImage]);
  QuoteImage.moveToBottom();
  
  yield * all(
    QuoteLine.end(1, 1),
    QuoteText.text('"There are no emergency meetings, no headlines, no breaking news. No one is acting as if we were in a crisis." - Greta Thunberg', 3, linear),
    QuoteImage.alpha(0.3, 1),
  );
  
  yield * waitUntil("quote disappear")

  const fly_out_ypos = VIEW_HEIGHT/2 + line_height;
  yield * all(
    QuoteLine.position.y(fly_out_ypos, 1),
    QuoteText.position.y(fly_out_ypos, 1),
    QuoteImage.position.y(fly_out_ypos + 500, 1),
  );
  
  QuoteLine.remove();
  QuoteText.remove();
  QuoteImage.remove();
  
  //#endregion

  yield * waitUntil("title: causes of apathy");
  //#region -------------------------------
  
  yield * Avatar.position(cardinal_position(Avatar, "center"), 1);

  title_label_text = "Causes of Apathy";
  title_label_color = "255, 255, 255";
  title_card_color = "0, 0, 0";
  fade_in_time = 1;
  text_typein_time = 1;
  fade_out_time = 1;

  TitleCard = TITLE_CARD("rgba(" + title_card_color + ", 0)");
  TitleLabel = TITLE_LABEL("", "rgba(" + title_label_color + ", 1)");
  Title = new Rect({
    children: [TitleCard, TitleLabel],
  });
  view.add(Title);

  yield * TitleCard.fill("rgba(" + title_card_color + ", 1)", fade_in_time);
  yield * TitleLabel.text(title_label_text, text_typein_time, linear);
  
  yield * waitUntil("title: causes of apathy disappear")

  yield * all(
    TitleCard.fill("rgba(" + title_card_color + ", 0)", fade_out_time),
    TitleLabel.fill("rgba(" + title_label_color + ", 0)", fade_out_time),
  );

  TitleCard.remove();
  TitleLabel.remove();

  //#endregion

  yield * waitUntil("title: powerlessness");
  //#region -------------------------------

  var PwrlText = PRESET_TXT();
  PwrlText.fontSize(50);
  PwrlText.text("Number one:");
  PwrlText.position(outside_position(PwrlText, "top"));

  view.add(PwrlText);

  yield * PwrlText.position(cardinal_position(PwrlText, "top", new Vector2(0, 100)), 1);
  yield * PwrlText.text("Powerlessness", 1.5, linear);

  yield * waitUntil("title: powerlessness disappear");

  yield * PwrlText.text("", 5);
  PwrlText.remove();
  
  //#endregion
    
  yield * waitUntil("powerlessness");
  //#region -------------------------------
  
  yield * Avatar.position(cardinal_position(Avatar, "left", new Vector2(100, 0)), 1);
  
  yield * waitUntil("friends, family, government");

  const list_texts_xpos = -20;
  const list_text_yoffset = 120;
  const list_font_size = 70;
  const list_selected_color = DEFAULT_FONT_COLOR;
  const list_not_selected_color = "#5c5c5c";
  const list_deny_color = "#ff8282";

  const ListText1 = PRESET_TXT();
  const ListText2 = PRESET_TXT();
  const ListText3 = PRESET_TXT();

  ListText1.fill(list_not_selected_color);
  ListText2.fill(list_not_selected_color);
  ListText3.fill(list_not_selected_color);

  ListText1.fontSize(list_font_size);
  ListText2.fontSize(list_font_size);
  ListText3.fontSize(list_font_size);

  ListText1.offset([-1, 0]);
  ListText2.offset([-1, 0]);
  ListText3.offset([-1, 0]);

  ListText1.position([list_texts_xpos, -list_text_yoffset]);
  ListText2.position([list_texts_xpos, 0]);
  ListText3.position([list_texts_xpos, +list_text_yoffset]);
  
  view.add([ListText1, ListText2, ListText3]);

  yield * all(
    ListText1.text("friends", 1, linear),
    ListText2.text("family", 1, linear),
    ListText3.text("government", 1, linear),
  );

  yield * waitUntil("friends");

  yield * ListText1.fill(list_selected_color, 0.2);

  yield * waitUntil("family");
  
  yield * all(
    ListText1.fill(list_not_selected_color, 0.2),
    ListText2.fill(list_selected_color, 0.2),
  );

  yield * waitUntil("government");

  yield * all(
    ListText2.fill(list_not_selected_color, 0.2),
    ListText3.fill(list_selected_color, 0.2),
  );
  
  yield * waitUntil("powerlessness disappear");

  yield * all(
    ListText1.fill(list_deny_color, 0.3),
    ListText2.fill(list_deny_color, 0.3),
    ListText3.fill(list_deny_color, 0.3),
  );

  yield * waitUntil("remove list");
  
  yield * all(
    ListText1.fill(BACKGROUND_COLOR, 0.4),
    ListText2.fill(BACKGROUND_COLOR, 0.4),
    ListText3.fill(BACKGROUND_COLOR, 0.4),
  );

  ListText1.remove();
  ListText2.remove();
  ListText3.remove();
  
  //#endregion
  
  yield * waitUntil("title: desensitization");
  //#region -------------------------------

  PwrlText.fontSize(50);
  PwrlText.text("Number two:");
  PwrlText.position(outside_position(PwrlText, "top"));
  
  view.add(PwrlText);

  yield * all(
    PwrlText.position(cardinal_position(PwrlText, "top", new Vector2(0, 100)), 1),
    Avatar.position(cardinal_position(Avatar, "center"), 1),
  );
  yield * PwrlText.text("Desensitization", 1.5, linear);
  
  yield * waitUntil("title: desensitization disappear");

  yield * PwrlText.text("", 1.5);
  PwrlText.remove();
  
  //#endregion
    
  yield * waitUntil("desensitization");
  //#region -------------------------------
  
  const image_xpos = 600;

  const FactoryImage1 = IMAGE(factory_image, 0.5);
  FactoryImage1.position([-image_xpos, VIEW_HEIGHT/2 + 250]);

  const TemperatureImage1 = IMAGE(temperature_image, 0.5);
  TemperatureImage1.position([image_xpos, VIEW_HEIGHT/2 + 250]);

  view.add([FactoryImage1, TemperatureImage1]);

  yield * FactoryImage1.position.y(0, 1, easeOutQuart);
  yield * waitFor(1.3);
  yield * TemperatureImage1.position.y(0, 1, easeOutQuart);

  yield * waitUntil("bouncing pictures");
  
  const images_offset = 50;

  const FactoryImage2 = IMAGE(factory_image2, 0.5);
  FactoryImage2.position([-image_xpos - images_offset, -VIEW_HEIGHT/2 - 250]);
  const FactoryImage3 = IMAGE(factory_image3, 0.14);
  FactoryImage3.position([-image_xpos + images_offset, -VIEW_HEIGHT/2 - 250]);

  const TemperatureImage2 = IMAGE(temperature_image2, 0.8);
  TemperatureImage2.position([image_xpos - images_offset, -VIEW_HEIGHT/2 - 250]);
  const TemperatureImage3 = IMAGE(temperature_image3, 0.8);
  TemperatureImage3.position([image_xpos + images_offset, -VIEW_HEIGHT/2 - 250]);
  
  view.add([
    FactoryImage2, FactoryImage3,
    TemperatureImage2, TemperatureImage3,
  ]);

  yield * any(
    FactoryImage2.position.y(0, 1, easeOutBounce),
    delay(0.3, FactoryImage3.position.y(0, 1, easeOutBounce)),
  );

  yield * all(
    TemperatureImage3.position.y(0, 1, easeOutBounce),
    delay(0.2, TemperatureImage2.position.y(0, 1, easeOutBounce)),
  );

  yield * waitUntil("desensitization disappear");

  yield * all(
    FactoryImage1.position.x(-(VIEW_WIDTH + 300), 1.4),
    FactoryImage2.position.x(-(VIEW_WIDTH + 300), 1.3),
    FactoryImage3.position.x(-(VIEW_WIDTH + 300), 1.2),
  );

  yield * all(
    TemperatureImage1.position.x(-(VIEW_WIDTH + 300), 1.4),
    TemperatureImage2.position.x(-(VIEW_WIDTH + 300), 1.3),
    TemperatureImage3.position.x(-(VIEW_WIDTH + 300), 1.2),
  );
  
  //#endregion
    
  yield * waitUntil("title: awareness");
  //#region -------------------------------

  yield * Avatar.position(cardinal_position(Avatar, "center"), 1);

  title_label_text = "Awareness";
  title_label_color = "255, 255, 255";
  title_card_color = "0, 0, 0";
  fade_in_time = 1;
  text_typein_time = 1.4;
  fade_out_time = 1;

  TitleCard = TITLE_CARD("rgba(" + title_card_color + ", 0)");
  TitleLabel = TITLE_LABEL("", "rgba(" + title_label_color + ", 1)");
  Title = new Rect({
    children: [TitleCard, TitleLabel],
  });
  view.add(Title);

  yield * TitleCard.fill("rgba(" + title_card_color + ", 1)", fade_in_time);
  yield * TitleLabel.text(title_label_text, text_typein_time, linear);
  
  yield * waitUntil("title: awareness disappear")

  yield * all(
    TitleCard.fill("rgba(" + title_card_color + ", 0)", fade_out_time),
    TitleLabel.fill("rgba(" + title_label_color + ", 0)", fade_out_time),
  );

  TitleCard.remove();
  TitleLabel.remove();

  //#endregion
    
  yield * waitUntil("awareness");
  //#region -------------------------------

  yield * Avatar.position(cardinal_position(Avatar, "top", new Vector2(0, 100)), 1);

  const lifebar_xpos = 400;
  const lifebar_ypos = 300;
  const lifebar_text_offset = 50;
  const lifebar_2050_offset = 300;

  const LifeBar = PRESET_PROGRESS_BAR();
  LifeBar.lineCap("round");
  LifeBar.end(0);
  LifeBar.points([[-lifebar_xpos, lifebar_ypos], [lifebar_xpos, lifebar_ypos]]);
  LifeBar.stroke("#5c7091");

  const LifeBarText = PRESET_TXT();
  LifeBarText.position([0, lifebar_ypos + lifebar_text_offset * 2]);

  const TextNow = PRESET_TXT();
  TextNow.position([-lifebar_xpos, lifebar_ypos + lifebar_text_offset]);

  const TextThen = PRESET_TXT();
  TextThen.position([lifebar_xpos, lifebar_ypos + lifebar_text_offset]);

  const Text2050 = PRESET_TXT();
  Text2050.position([-lifebar_xpos + lifebar_2050_offset, lifebar_ypos + lifebar_text_offset]);

  const LifeLine = PRESET_LINE();
  LifeLine.points([
    [-lifebar_xpos, lifebar_ypos - lifebar_text_offset/2], 
    [-lifebar_xpos, lifebar_ypos - lifebar_text_offset],
    [-lifebar_xpos + lifebar_2050_offset, lifebar_ypos - lifebar_text_offset],
    [-lifebar_xpos + lifebar_2050_offset, lifebar_ypos - lifebar_text_offset/2],
  ]);
  LifeLine.end(0);

  const LifeLineText = PRESET_TXT();
  LifeLineText.position([-lifebar_xpos + lifebar_2050_offset/2, lifebar_ypos - lifebar_text_offset * 1.5]);

  view.add([LifeBar, LifeBarText, TextNow, TextThen, Text2050, LifeLine, LifeLineText]);
  
  yield * all(
    LifeBar.end(1, 1),
    LifeBarText.text("Your life", 1),
    TextNow.text("Now", 1),
    TextThen.text("Death", 1),
    Text2050.text("2050", 1),
    LifeLine.end(1, 1),
    LifeLineText.text("very short", 1),
  );
  
  yield * waitUntil("awareness disappear");

  yield * all(
    LifeBar.end(0, 1),
    LifeBarText.text("", 1),
    TextNow.text("", 1),
    TextThen.text("", 1),
    Text2050.text("", 1),
    LifeLine.end(0, 1),
    LifeLineText.text("", 1),
  );

  LifeBar.remove();
  LifeBarText.remove();
  TextNow.remove();
  TextThen.remove();
  LifeLine.remove();
  LifeLineText.remove();

  yield * Avatar.position.y(0, 1);
  
  //#endregion
    
  yield * waitUntil("title: inspiration");
  //#region -------------------------------

  yield * Avatar.position(cardinal_position(Avatar, "center"), 1);

  title_label_text = "Inspiration";
  title_label_color = "255, 255, 255";
  title_card_color = "0, 0, 0";
  fade_in_time = 0.3;
  text_typein_time = 1.4;
  fade_out_time = 1;

  TitleCard = TITLE_CARD("rgba(" + title_card_color + ", 0)");
  TitleLabel = TITLE_LABEL("", "rgba(" + title_label_color + ", 1)");
  Title = new Rect({
    children: [TitleCard, TitleLabel],
  });
  view.add(Title);

  yield * TitleCard.fill("rgba(" + title_card_color + ", 1)", fade_in_time);
  yield * TitleLabel.text(title_label_text, text_typein_time, linear);
  
  yield * waitUntil("title: inspiration disappear")

  yield * all(
    TitleCard.fill("rgba(" + title_card_color + ", 0)", fade_out_time),
    TitleLabel.fill("rgba(" + title_label_color + ", 0)", fade_out_time),
  );

  TitleCard.remove();
  TitleLabel.remove();

  //#endregion
    
  yield * waitUntil("inspiration");
  //#region -------------------------------
  
  const StageBackground = IMAGE(stage_image, 0);

  view.add(StageBackground);

  StageBackground.moveToBottom();

  yield * all(
    StageBackground.scale(2, 2),
    StageBackground.rotation(360 * 7, 2),
  );
  
  yield * waitUntil("stage spin away");

  yield * all(
    StageBackground.scale(0, 2),
    StageBackground.rotation(-360 * 7, 2),
  );

  StageBackground.remove();

  const BackyardImage = IMAGE(backyard_image, 0.5);
  BackyardImage.position(outside_position(BackyardImage, "top-left"));
  const TreeImage = IMAGE(tree_image, 0.4);
  TreeImage.position(outside_position(TreeImage, "top-right"));

  view.add([BackyardImage, TreeImage]);

  yield * waitUntil("backyard");
  yield * BackyardImage.position(cardinal_position(BackyardImage, "left"), 1);
  yield * waitUntil("tree");
  yield * TreeImage.position(cardinal_position(TreeImage, "right"), 1);

  yield * waitUntil("inspiration disappear");

  yield * all(
    BackyardImage.position(outside_position(BackyardImage, "right"), 1),
    TreeImage.position(outside_position(TreeImage, "left"), 1),
  );

  yield * Avatar.scale(2, 1);

  //#endregion

  yield * waitUntil("closing");
  //#region -------------------------------

  yield * all(
    Avatar.scale(0, 3),
    Avatar.rotation(360 * 3, 3),
  );
  Avatar.remove();

  //#endregion

  //#endregion



});



//#region Functions

function cardinal_position(node: Shape, where: String, modifier: Vector2 = Vector2.zero) {
  const EDGE_X = (VIEW_WIDTH-BORDER_MARGIN-node.size.x()*node.scale.x())/2;
  const EDGE_Y = (VIEW_HEIGHT-BORDER_MARGIN-node.size.y()*node.scale.y())/2;

  var x_val = 0;
  var y_val = 0;
  
  if (where.includes("left")) x_val = -EDGE_X;
  if (where.includes("right")) x_val = EDGE_X;
  if (where.includes("top")) y_val = -EDGE_Y;
  if (where.includes("bottom")) y_val = EDGE_Y;

  return new Vector2(x_val + modifier.x, y_val + modifier.y);
}

function outside_position(node: Shape, where: String, modifier: Vector2 = Vector2.zero) {
  const OUT_X = (VIEW_WIDTH+node.size.x()*node.scale.x())/2;
  const OUT_Y = (VIEW_HEIGHT+node.size.y()*node.scale.y())/2;

  var x_val = 0;
  var y_val = 0;

  if (where.includes("left")) x_val = -OUT_X;
  if (where.includes("right")) x_val = OUT_X;
  if (where.includes("top")) y_val = -OUT_Y;
  if (where.includes("bottom")) y_val = OUT_Y;

  return new Vector2(x_val + modifier.x, y_val + modifier.y);
}

function PRESET_LINE() {
  return new Line({
    lineCap: "round",
    lineWidth: 5,
    stroke: "#f4fff2",
  });
}

function PRESET_TXT() {
  return new Txt({
    fontFamily: DEFAULT_FONT,
    fontSize: 30,
    text: "",
    fill: DEFAULT_FONT_COLOR,
  });
}

function PRESET_PROGRESS_BAR() {
  return new Line({
    lineWidth: 30,
    stroke: "#75ff8f",
    lineCap: "square",
  });
}

function TITLE_CARD(bg_color = "#ffffff") {
  return new Rect({
    size: [VIEW_WIDTH, VIEW_HEIGHT],
    fill: bg_color,
  });
}

function TITLE_LABEL(title_text = "Title", text_color = "#000000") {
  return new Txt({
    text: title_text,
    fontFamily: TITLE_FONT,
    fontSize: 200,
    fill: text_color,
  })
}

function COMPLETE_TITLE_SLIDE(bg_color = "#ffffff", title_text = "Title", text_color = "#000000") {
  return new Rect({
    size: [VIEW_WIDTH, VIEW_HEIGHT],
    fill: bg_color,
    children: [TITLE_LABEL(title_text, text_color)],
  });
}

function IMAGE(image_source: SignalValue<string>, image_scale: SignalValue<PossibleVector2> = 1) {
  return new Img({
    scale: image_scale,
    src: image_source,
  });
}

//#endregion
