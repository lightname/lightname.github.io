---
title: (JAVA) Compress zip Set compressed file password
tags:
  - java
created: 2023-03-08T17:45:00.000Z # this is not used by the theme at the moment
modified: 2023-03-08T17:45:00.000Z
---

We used zip4j to mangle the password-protected zip files.

## maven dependency

```jsx
<dependency>
  <groupId>net.lingala.zip4j</groupId>
  <artifactId>zip4j</artifactId>
  <version>1.3.3</version>
</dependency>
```

## Zipper.java

```java
package io.github.stove99.util;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import net.lingala.zip4j.core.ZipFile;
import net.lingala.zip4j.exception.ZipException;
import net.lingala.zip4j.model.ZipParameters;
import net.lingala.zip4j.util.Zip4jConstants;

public class Zipper {

    private List<File> files = new ArrayList<>();

    public Zipper add(String file) {
        return add(new File(file));
    }

    public Zipper add(File file) {
        if (file == null || !file.exists())
            throw new RuntimeException("Not Found File!!.");

        files.add(file);

        return this;
    }

    /**
     * compress
     */
    public void zip(String to) throws ZipException {
        this.zip(to, null);
    }

    /**
     * Compress with password
     */
    public void zip(String to, String password) throws ZipException {
        ZipParameters param = new ZipParameters();
        param.setCompressionMethod(Zip4jConstants.COMP_DEFLATE);
        param.setCompressionLevel(Zip4jConstants.DEFLATE_LEVEL_ULTRA);

        if (password != null) {
            param.setEncryptFiles(true);
            param.setEncryptionMethod(Zip4jConstants.ENC_METHOD_AES);
            param.setAesKeyStrength(Zip4jConstants.AES_STRENGTH_256);
            param.setPassword(password);
        }

        ZipFile zipFile = new ZipFile(to);

        if (files.size() == 0) {
            throw new RuntimeException("There is no file to be compressed.");
        }

        files.forEach(file -> {
            try {
                if (file.isFile()) {
                    zipFile.addFile(file, param);
                } else {
                    zipFile.addFolder(file, param);
                }
            } catch (ZipException e) {
                e.printStackTrace();
            }
        });
    }

    /**
     * decompress
     */
    public void unzip(String file, String password) throws ZipException {
        File f = new File(file);

        ZipFile zipFile = new ZipFile(f);

        if (zipFile.isEncrypted()) {
            zipFile.setPassword(password);
        }

        zipFile.extractAll(f.getParent());
    }

    public void unzip(String file) throws ZipException {
        this.unzip(file, null);
    }
}
```

## Zipper 사용법

```java
Zipper zipper = new Zipper();

// Compressed with password pass1234
zipper.add("c:\\tmp").add("c:\\files\\data.txt").zip("c:\\archive_test.zip", "pass1234");

// normal compression
zipper.add("c:\\tmp").add("c:\\files\\data.txt").zip("c:\\archive_test.zip");
```
