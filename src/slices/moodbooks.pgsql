CREATE DATABASE moodbooks;

CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    author TEXT NOT NULL,
    moods TEXT[] NOT NULL
);

INSERT INTO books (title, author, moods) VALUES
('Гаррі Поттер і філософський камінь','Дж. К. Роулінг', ARRAY['happy','adventurous']),
('Великий Гетсбі','Ф. Скотт Фіцджеральд', ARRAY['romantic','sad']),
('1984','Джордж Орвелл', ARRAY['anxious','sad']),
('Маленькі жінки','Луїза Мей Олкотт', ARRAY['happy','romantic']),
('Сад Гестиманський','Іван Багряний', ARRAY['adventurous','sad']),
('Вбивство в Східному експресі','Агата Крісті', ARRAY['anxious','adventurous']),
('Гордість і упередження','Джейн Остін', ARRAY['romantic','happy']),
('Старий і море','Ернест Хемінгуей', ARRAY['sad','adventurous']),
('Тіні забутих предків','Михайло Коцюбинський', ARRAY['romantic','sad']),
('Мобі Дік','Герман Мелвілл', ARRAY['adventurous','anxious']),
('Ловець у житі','Джером Д. Селінджер', ARRAY['sad','anxious']),
('Голодні ігри','Сьюзен Коллінз', ARRAY['adventurous','anxious']),
('Краса по-американськи','Джонатан Франзен', ARRAY['sad','romantic']),
('Титанік','Вальтер Лорд', ARRAY['sad','anxious']),
('Шляхетні жінки','Луїза Мей Олкотт', ARRAY['romantic','happy']),
('Мандрівка на край світу','Жюль Верн', ARRAY['adventurous','happy']),
('Три товариші','Еріх Марія Ремарк', ARRAY['sad','romantic']),
('Франкенштейн','Мері Шеллі', ARRAY['sad','anxious']),
('Джейн Ейр','Шарлотта Бронте', ARRAY['romantic','sad']),
('Портрет Доріана Грея','Оскар Уайльд', ARRAY['anxious','sad']),
('Маленький принц','Антуан де Сент-Екзюпері', ARRAY['happy','romantic']),
('Довга подорож додому','Джеймс Хілтон', ARRAY['sad','romantic']),
('Три мушкетери','Олександр Дюма', ARRAY['adventurous','happy']),
('Віднесені вітром','Маргарет Мітчелл', ARRAY['romantic','sad']),
('Тіні','Джонатан Коу', ARRAY['sad','anxious']),
('Гра престолів','Джордж Мартін', ARRAY['adventurous','anxious']),
('Володар перснів: Братство персня','Дж. Р. Р. Толкін', ARRAY['adventurous','happy']),
('Гаррі Поттер і таємна кімната','Дж. К. Роулінг', ARRAY['happy','adventurous']),
('Катерина','Тарас Шевченко', ARRAY['romantic','sad']),
('Одіссея','Гомер', ARRAY['adventurous','anxious']);

INSERT INTO books (title, author, moods) VALUES
('Доки смерть не розлучить нас', 'Юрко Вовк', ARRAY['angry', 'romantic']),
('Танго смерті', 'Юрій Винничук', ARRAY['angry', 'adventurous']),
('Залишенець', 'Василь Шкляр', ARRAY['angry', 'sad']),
('Не озирайся і мовчи', 'Макс Кідрук', ARRAY['angry', 'adventurous']),
('Моцарт 2.0', 'Дорж Бату', ARRAY['angry', 'anxious']),
('Інтернат', 'Сергій Жадан', ARRAY['angry', 'anxious']),
('Франческа. Повелителька траєкторій', 'Дорж Бату', ARRAY['angry', 'adventurous']),
('Спитайте Мієчку', 'Євгенія Кузнєцова', ARRAY['angry', 'romantic']),
('Драбина', 'Євгенія Кузнєцова', ARRAY['angry', 'anxious']),
('Музей покинутих секретів', 'Оксана Забужко', ARRAY['angry', 'adventurous']);