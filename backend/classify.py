import sys
from PIL import Image
from transformers import AutoImageProcessor, AutoModelForImageClassification

image_path = sys.argv[1]

processor = AutoImageProcessor.from_pretrained("oohtmeel/swin-tiny-patch4-finetuned-lung-cancer-ct-scans")
model = AutoModelForImageClassification.from_pretrained("oohtmeel/swin-tiny-patch4-finetuned-lung-cancer-ct-scans")

image = Image.open(image_path)
inputs = processor(images=image, return_tensors="pt")
outputs = model(**inputs)
predicted_class = outputs.logits.argmax().item()

# Assuming class 0 = Negative, class 1 = Positive
print("Positive" if predicted_class == 1 else "Negative")
